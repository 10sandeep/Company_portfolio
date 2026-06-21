'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

const OUTER   = 56
const INNER   = 42
const STROKE  = 3
const RING_R  = (OUTER / 2) - STROKE / 2   // 26.5 — ring sits just inside the outer edge
const CIRC    = 2 * Math.PI * RING_R

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  // Raw progress 0→1 fed into a spring for smooth lag-free glide
  const raw    = useMotionValue(0)
  const spring = useSpring(raw, { stiffness: 120, damping: 28, mass: 0.6 })
  const offset = useTransform(spring, [0, 1], [CIRC, 0])

  useEffect(() => {
    function onScroll() {
      const scrolled  = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      raw.set(maxScroll > 0 ? scrolled / maxScroll : 0)
      setVisible(scrolled > 220)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [raw])

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center cursor-pointer"
          style={{ width: OUTER, height: OUTER, background: 'none', border: 'none', padding: 0 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Progress ring */}
          <svg
            width={OUTER}
            height={OUTER}
            className="absolute inset-0"
            style={{ transform: 'rotate(-90deg)' }}
          >
            {/* track */}
            <circle
              cx={OUTER / 2}
              cy={OUTER / 2}
              r={RING_R}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={STROKE}
            />
            {/* progress fill — driven by spring motion value */}
            <motion.circle
              cx={OUTER / 2}
              cy={OUTER / 2}
              r={RING_R}
              fill="none"
              stroke="#C5F23C"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
            />
          </svg>

          {/* Inner button circle */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width:  INNER,
              height: INNER,
              background: '#6C2BD9',
              boxShadow: '0 4px 18px rgba(108,43,217,0.45)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 16, height: 16 }}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
