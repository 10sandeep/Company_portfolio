'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Theme = 'dark' | 'light'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')
  const btnRef = useRef<HTMLButtonElement>(null)
  const isDark = theme === 'dark'

  /* Sync with the value applied by the inline init script */
  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') as Theme | null
    if (t === 'light' || t === 'dark') setTheme(t)
  }, [])

  const handleToggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    if (!btnRef.current) return

    /* Ripple origin = centre of the toggle button */
    const { left, top, width, height } = btnRef.current.getBoundingClientRect()
    const x = Math.round(left + width / 2)
    const y = Math.round(top + height / 2)
    const radius = Math.hypot(
      Math.max(x, window.innerWidth  - x),
      Math.max(y, window.innerHeight - y),
    )

    /* Full-screen overlay that expands as a circle from the button */
    const el = document.createElement('div')
    el.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:9998', 'pointer-events:none',
      `background:${next === 'light' ? '#f4f5fb' : '#0A0A0B'}`,
      `clip-path:circle(0px at ${x}px ${y}px)`,
      'transition:clip-path 0.7s cubic-bezier(0.4,0,0.2,1)',
      'will-change:clip-path',
    ].join(';')
    document.body.appendChild(el)

    /* Two rAF calls ensure the transition fires after the element is painted */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`
    }))

    /* Switch theme mid-animation so content "appears" under the ripple */
    setTimeout(() => {
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
      setTheme(next)
    }, 350)

    /* Remove overlay after animation completes */
    setTimeout(() => el.remove(), 750)
  }, [theme])

  return (
    <button
      ref={btnRef}
      onClick={handleToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 rounded-full flex items-center justify-center flex-none
                 cursor-pointer bg-transparent border transition-all duration-300"
      style={{
        borderColor: isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.14)',
        background:  isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0,   scale: 1, opacity: 1 }}
            exit={{   rotate:  90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute flex items-center justify-center"
          >
            <SunIcon />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate:  90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0,   scale: 1, opacity: 1 }}
            exit={{   rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute flex items-center justify-center"
          >
            <MoonIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="5"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22"   x2="6.34"  y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="5"  y2="12"/>
      <line x1="19" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78"  x2="6.34"  y2="17.66"/>
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#6C2BD9" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}
