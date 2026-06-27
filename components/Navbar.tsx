'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar({ onOpenAbout, onOpenProducts, onOpenFAQ }: {
  onOpenAbout?: () => void
  onOpenProducts?: () => void
  onOpenFAQ?: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const close = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'About',    action: onOpenAbout },
    { label: 'Products', action: onOpenProducts },
    { label: 'Services', href: '/services' },
    { label: 'FAQ',      action: onOpenFAQ },
    { label: 'Contact',  href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 z-50"
      style={{
        top: 'var(--banner-h, 0px)',
        padding: scrolled ? '10px 20px' : '0',
        transition: 'padding 0.55s cubic-bezier(0.16, 1, 0.3, 1), top 0.3s ease',
      }}
    >
      {/* ── Pill wrapper (handles centering + beam border) ── */}
      <div style={{ position: 'relative', maxWidth: scrolled ? '1020px' : '1280px', margin: '0 auto' }}>

        {/* ── Beam border (pill state only) ── */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              key="beam"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                inset: '-1.5px',
                borderRadius: '9999px',
                overflow: 'hidden',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  width: '200%',
                  height: '200%',
                  top: '-50%',
                  left: '-50%',
                  background:
                    'conic-gradient(from 0deg, transparent 0%, transparent 60%, #4c1d95 72%, #7c3aed 80%, #c4b5fd 86%, #7c3aed 92%, #4c1d95 97%, transparent 100%)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main bar / pill ── */}
        <div
          className="flex items-center justify-between gap-6"
          style={{
            position: 'relative',
            zIndex: 1,
            height: scrolled ? '64px' : '80px',
            padding: '0 28px',
            background: scrolled ? 'rgba(9,5,20,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'saturate(160%) blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(20px)' : 'none',
            borderRadius: scrolled ? '9999px' : '0',
            border: scrolled ? 'none' : '1px solid transparent',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.35)' : 'none',
            transition: 'height 0.55s cubic-bezier(0.16,1,0.3,1), background 0.4s, border-radius 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center no-underline flex-none">
            <Image
              src="/images/logo.png"
              alt="Sandeep Nayak"
              width={480}
              height={128}
              className="w-auto object-contain"
              style={{
                mixBlendMode: 'screen',
                height: scrolled ? '72px' : '84px',
                transition: 'height 0.55s cubic-bezier(0.16,1,0.3,1)',
              }}
              priority
            />
          </Link>

          {/* ── Center pill nav — desktop ── */}
          <nav className="hidden md:flex items-center">
            <div
              className="flex items-center gap-[2px] px-[6px] py-[6px] rounded-full"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {navLinks.map(item => {
                const isHov = hoveredItem === item.label
                const isAct = item.href ? pathname === item.href : false
                const lit   = isHov || isAct

                const inner = (
                  <>
                    {lit && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.13)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-[1]">{item.label}</span>
                  </>
                )

                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative px-[16px] py-[7px] rounded-full text-sm font-medium no-underline transition-colors duration-150"
                    style={{ color: lit ? '#fff' : 'rgba(255,255,255,0.75)' }}
                    onMouseEnter={() => setHoveredItem(item.label)}
                  >
                    {inner}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="relative px-[16px] py-[7px] rounded-full text-sm font-medium bg-transparent border-0 cursor-pointer transition-colors duration-150"
                    style={{ color: lit ? '#fff' : 'rgba(255,255,255,0.75)' }}
                    onMouseEnter={() => setHoveredItem(item.label)}
                  >
                    {inner}
                  </button>
                )
              })}
            </div>
          </nav>

          {/* ── Right group ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-[7px] px-[20px] py-[10px] rounded-full
                         text-sm font-semibold no-underline transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                color: '#fff',
                boxShadow: '0 0 0 1px rgba(124,58,237,0.5), 0 4px 16px rgba(124,58,237,0.35)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 0 1px rgba(124,58,237,0.7), 0 8px 24px rgba(124,58,237,0.5)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 0 1px rgba(124,58,237,0.5), 0 4px 16px rgba(124,58,237,0.35)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Get In Touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </Link>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center bg-transparent border-0 cursor-pointer rounded-lg"
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg key="close" viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5"
                    initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </motion.svg>
                ) : (
                  <motion.svg key="menu" viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5"
                    initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mx-4 mb-3 rounded-[20px] overflow-hidden"
            style={{
              background: 'rgba(15,3,56,0.96)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col px-2 py-2">
              {[
                { label: 'About',    action: () => { onOpenAbout?.();    close() } },
                { label: 'Products', action: () => { onOpenProducts?.(); close() } },
                { label: 'Services', href: '/services' },
                { label: 'FAQ',      action: () => { onOpenFAQ?.();      close() } },
                { label: 'Contact',  href: '/contact' },
              ].map(item =>
                item.href ? (
                  <Link key={item.label} href={item.href} onClick={close}
                    className="px-4 py-[12px] text-sm font-medium no-underline rounded-xl transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label} onClick={item.action}
                    className="px-4 py-[12px] text-sm font-medium text-left bg-transparent border-0 cursor-pointer rounded-xl transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.label}
                  </button>
                )
              )}
              <div className="px-2 pt-1 pb-2 mt-1">
                <Link href="/contact" onClick={close}
                  className="flex items-center justify-center gap-2 py-[12px] rounded-full
                             text-sm font-semibold text-white no-underline"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' }}>
                  Get In Touch
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                    strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
