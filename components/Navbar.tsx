'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlareHover from './GlareHover'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home',    href: '#home'    },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onOpenAbout, onOpenProducts, onOpenFAQ }: {
  onOpenAbout?: () => void
  onOpenProducts?: () => void
  onOpenFAQ?: () => void
}) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--nav-bg)', backdropFilter: 'saturate(160%) blur(14px)',
               borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1180px] mx-auto px-7 py-[18px] flex items-center justify-between gap-5">

        {/* left links */}
        <div className="flex gap-6 text-sm font-semibold" style={{ color: 'var(--text-nav)' }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4, ease: 'easeOut' }}>
            <button onClick={onOpenAbout}
              className="hover:text-[#B99DFF] transition-colors duration-200 bg-transparent border-0
                         cursor-pointer text-sm font-semibold p-0"
              style={{ color: 'inherit' }}>
              About Us
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.43, ease: 'easeOut' }}>
            <button onClick={onOpenProducts}
              className="hover:text-[#B99DFF] transition-colors duration-200 bg-transparent border-0
                         cursor-pointer text-sm font-semibold p-0"
              style={{ color: 'inherit' }}>
              Product
            </button>
          </motion.div>

          {links.map((l, i) => (
            <motion.div key={l.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.46 + i * 0.06, ease: 'easeOut' }}>
              <Link href={l.href}
                className="hover:text-[#B99DFF] transition-colors duration-200 no-underline"
                style={{ color: 'inherit' }}>
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* logo */}
        <motion.div className="flex items-center gap-[9px]"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}>
          <span className="w-[26px] h-[26px] text-purple block flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
          <span className="font-archivo font-extrabold text-[21px] tracking-tight"
                style={{ color: 'var(--text)' }}>
            Sandeep Nayak
          </span>
        </motion.div>

        {/* right */}
        <motion.div className="flex items-center gap-3 justify-end"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}>

          <button onClick={onOpenFAQ}
            className="text-sm font-semibold hover:text-[#B99DFF] transition-colors
                       duration-200 bg-transparent border-0 cursor-pointer p-0"
            style={{ color: 'var(--text-nav)' }}>
            FAQ
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          <GlareHover
            width="auto" height="auto" background="transparent" borderRadius="9999px"
            borderColor="rgba(255,255,255,0.2)" glareColor="#ffffff"
            glareOpacity={0.35} glareAngle={-30} glareSize={300} transitionDuration={700}>
            <Link href="#contact"
              className="inline-flex items-center gap-2 px-[18px] py-[10px]
                         text-sm font-semibold text-white no-underline">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                   strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="13 6 19 12 13 18"/>
              </svg>
            </Link>
          </GlareHover>
        </motion.div>
      </div>
    </motion.nav>
  )
}
