'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import GlareHover from './GlareHover'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home',    href: '#home'    },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ onOpenAbout, onOpenProducts, onOpenFAQ }: {
  onOpenAbout?: () => void
  onOpenProducts?: () => void
  onOpenFAQ?: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--nav-bg)', backdropFilter: 'saturate(160%) blur(14px)',
               borderColor: 'var(--border)' }}
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-7 py-[16px] md:py-[18px] flex items-center justify-between gap-4">

        {/* left links — desktop only */}
        <div className="hidden md:flex gap-6 text-sm font-semibold" style={{ color: 'var(--text-nav)' }}>
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
          <span className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] text-purple block flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
          <span className="font-archivo font-extrabold text-[17px] md:text-[21px] tracking-tight"
                style={{ color: 'var(--text)' }}>
            Sandeep Nayak
          </span>
        </motion.div>

        {/* right group */}
        <motion.div className="flex items-center gap-2 md:gap-3"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}>

          {/* FAQ — desktop only */}
          <button onClick={onOpenFAQ}
            className="hidden md:block text-sm font-semibold hover:text-[#B99DFF] transition-colors
                       duration-200 bg-transparent border-0 cursor-pointer p-0"
            style={{ color: 'var(--text-nav)' }}>
            FAQ
          </button>

          {/* Theme toggle — always visible */}
          <ThemeToggle />

          {/* Get Started — desktop only */}
          <div className="hidden md:block">
            <GlareHover
              width="auto" height="auto" background="transparent" borderRadius="9999px"
              borderColor="rgba(255,255,255,0.2)" glareColor="#ffffff"
              glareOpacity={0.35} glareAngle={-30} glareSize={300} transitionDuration={700}>
              <Link href="/contact"
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
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center bg-transparent border-0 cursor-pointer rounded-lg"
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.svg
                  key="close"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" className="w-[20px] h-[20px]"
                  style={{ color: 'var(--text-nav)' }}
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" className="w-[20px] h-[20px]"
                  style={{ color: 'var(--text-nav)' }}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <line x1="4" y1="7" x2="20" y2="7"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <line x1="4" y1="17" x2="20" y2="17"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden border-t"
            style={{ borderColor: 'var(--border)', background: 'var(--nav-bg)' }}
          >
            <div className="flex flex-col px-5 py-3">
              {[
                { label: 'About Us', action: () => { onOpenAbout?.(); close() } },
                { label: 'Product',  action: () => { onOpenProducts?.(); close() } },
                { label: 'Home',     href: '#home' },
                { label: 'FAQ',      action: () => { onOpenFAQ?.(); close() } },
                { label: 'Contact',  href: '/contact' },
              ].map((item, i, arr) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="py-[13px] text-sm font-semibold no-underline"
                    style={{
                      color: 'var(--text-nav)',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="py-[13px] text-sm font-semibold text-left bg-transparent border-0 cursor-pointer"
                    style={{
                      color: 'var(--text-nav)',
                      borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    {item.label}
                  </button>
                )
              )}
              <Link
                href="/contact"
                onClick={close}
                className="mt-3 mb-1 inline-flex items-center justify-center gap-2 py-[12px] rounded-full
                           text-sm font-semibold text-white no-underline"
                style={{ background: '#6C2BD9' }}
              >
                Get Started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                     strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="13 6 19 12 13 18"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
