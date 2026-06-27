'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FooterProps {
  onOpenAbout?:    () => void
  onOpenProducts?: () => void
  onOpenFAQ?:      () => void
  noAnimation?:    boolean
}

const QUICK_LINKS = [
  { label: 'Home',       href: '/',        action: null,       fallback: null },
  { label: 'About Us',   href: null,       action: 'about',    fallback: '/' },
  { label: 'Our Work',   href: '/#work',   action: null,       fallback: null },
  { label: 'Products',   href: null,       action: 'products', fallback: '/' },
  { label: 'FAQ',        href: null,       action: 'faq',      fallback: '/' },
  { label: 'Contact Us', href: '/contact', action: null,       fallback: null },
]

const SERVICES = [
  'App Development',
  'Web Development',
  'UI/UX Design',
  'Backend Solutions',
  'AI/ML Development',
  'Brand Strategy',
]

const TAGLINE_WORDS = 'We design and develop websites, mobile apps, and AI products for startups and businesses.'.split(' ')

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center flex-none text-white/60"
      style={{ background: 'rgba(255,255,255,0.06)' }}
      whileHover={{ borderColor: 'rgba(197,242,60,0.6)', color: '#C5F23C', scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.a>
  )
}

export default function Footer({ onOpenAbout, onOpenProducts, onOpenFAQ, noAnimation }: FooterProps) {
  const [email,        setEmail]        = useState('')
  const [sent,         setSent]         = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const emailActive = emailFocused || !!email

  /* ── section refs ── */
  const footerRef   = useRef<HTMLElement>(null)
  const gridRef     = useRef<HTMLDivElement>(null)
  const leftColRef  = useRef<HTMLDivElement>(null)
  const quickColRef = useRef<HTMLDivElement>(null)
  const svcColRef   = useRef<HTMLDivElement>(null)
  const dividerRef  = useRef<HTMLDivElement>(null)
  const bottomRef   = useRef<HTMLDivElement>(null)
  const socialsRef  = useRef<HTMLDivElement>(null)
  const privacyRef  = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (noAnimation) return
    const ctx = gsap.context(() => {

      /* ── 1. Footer card: scale + fade up ── */
      gsap.from(footerRef.current, {
        opacity: 0, y: 70, scale: 0.96,
        duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', once: true },
      })

      /* ── 2. Left column — slides in from left as a whole block ── */
      gsap.from(leftColRef.current, {
        opacity: 0, x: -70,
        duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
      })

      /* tagline words stagger inside left column */
      const words = leftColRef.current?.querySelectorAll('.gsap-word')
      if (words?.length) {
        gsap.from(words, {
          opacity: 0, y: 22,
          duration: 0.5, stagger: 0.04, ease: 'power3.out', delay: 0.25,
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
        })
      }

      /* ── 3. Quick Links column — rises up with delay ── */
      gsap.from(quickColRef.current, {
        opacity: 0, y: 60,
        duration: 0.85, ease: 'power3.out', delay: 0.18,
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
      })

      /* items stagger inside Quick Links */
      const qlItems = quickColRef.current?.querySelectorAll('li')
      if (qlItems?.length) {
        gsap.from(qlItems, {
          opacity: 0, x: -14,
          duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.38,
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
        })
      }

      /* ── 4. Services column — slides in from right ── */
      gsap.from(svcColRef.current, {
        opacity: 0, x: 70,
        duration: 0.9, ease: 'power3.out', delay: 0.28,
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
      })

      /* items stagger inside Services */
      const svItems = svcColRef.current?.querySelectorAll('li')
      if (svItems?.length) {
        gsap.from(svItems, {
          opacity: 0, x: 14,
          duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.48,
          scrollTrigger: { trigger: gridRef.current, start: 'top 82%', once: true },
        })
      }

      /* ── 5. Divider — scaleX wipe from left ── */
      gsap.from(dividerRef.current, {
        scaleX: 0, transformOrigin: 'left center',
        duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: dividerRef.current, start: 'top 95%', once: true },
      })

      /* ── 6. Bottom bar — whole block fades up ── */
      gsap.from(bottomRef.current, {
        opacity: 0, y: 32,
        duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: bottomRef.current, start: 'top 97%', once: true },
      })

      /* social icons bounce in, staggered */
      const socials = socialsRef.current?.querySelectorAll('a')
      if (socials?.length) {
        gsap.from(socials, {
          opacity: 0, scale: 0.3, y: 12,
          duration: 0.5, stagger: 0.08, ease: 'back.out(2.2)', delay: 0.2,
          scrollTrigger: { trigger: bottomRef.current, start: 'top 97%', once: true },
        })
      }

      /* privacy link fades in from right */
      gsap.from(privacyRef.current, {
        opacity: 0, x: 24,
        duration: 0.6, ease: 'power3.out', delay: 0.35,
        scrollTrigger: { trigger: bottomRef.current, start: 'top 97%', once: true },
      })

    }, footerRef)

    return () => ctx.revert()
  }, [noAnimation])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) { setSent(true); setEmail('') }
  }

  function handleQuickLink(action: string | null, e: React.MouseEvent) {
    if (action === 'about'    && onOpenAbout)    { e.preventDefault(); onOpenAbout() }
    if (action === 'products' && onOpenProducts) { e.preventDefault(); onOpenProducts() }
    if (action === 'faq'      && onOpenFAQ)      { e.preventDefault(); onOpenFAQ() }
  }

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] text-white overflow-hidden"
      style={{ background: 'var(--panel)' }}
    >
      <div className="max-w-[1120px] mx-auto px-[clamp(20px,5vw,70px)]">

        {/* ── Main grid ── */}
        <div
          ref={gridRef}
          className="grid gap-10 sm:gap-12 md:gap-14 pt-6 sm:pt-8 md:pt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]"
        >

          {/* ── Left: brand + tagline + email ── */}
          <div ref={leftColRef} className="flex flex-col gap-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="Bloom Stack"
                width={480}
                height={128}
                className="w-auto object-contain"
                style={{ height: '120px', mixBlendMode: 'screen' }}
              />
            </div>

            {/* Tagline — words wrapped for stagger */}
            <p
              className="m-0 text-white leading-[1.4] font-archivo font-bold"
              style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
            >
              {TAGLINE_WORDS.map((word, i) => (
                <span key={i} className="gsap-word inline-block mr-[0.28em]">{word}</span>
              ))}
            </p>

            {/* Email subscription */}
            <form onSubmit={handleSubmit} className="w-full max-w-[400px]">
              {sent ? (
                <motion.p
                  className="text-lime text-sm font-semibold py-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks! We&apos;ll be in touch.
                </motion.p>
              ) : (
                <div className="relative pt-5">
                  <motion.label
                    className="absolute left-0 pointer-events-none font-medium"
                    style={{ transformOrigin: 'left bottom' }}
                    animate={{
                      top:   emailActive ? 0 : 20,
                      scale: emailActive ? 0.8 : 1,
                      color: emailActive
                        ? (emailFocused ? '#C5F23C' : 'rgba(255,255,255,0.5)')
                        : 'rgba(255,255,255,0.38)',
                    }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-sm">Email</span>
                  </motion.label>

                  <div
                    className="relative flex items-center transition-colors duration-200"
                    style={{ borderBottom: `1px solid ${emailFocused ? 'rgba(197,242,60,0.6)' : 'rgba(255,255,255,0.22)'}` }}
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      className="w-full bg-transparent text-sm text-white py-3 pr-12 outline-none"
                    />
                    <motion.button
                      type="submit"
                      className="absolute right-0 w-9 h-9 rounded-full flex items-center justify-center flex-none"
                      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                      whileHover={{ background: '#C5F23C', color: '#0B0B0B', scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <motion.svg
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                        strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.18 }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="13 6 19 12 13 18"/>
                      </motion.svg>
                    </motion.button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* ── Quick Links ── */}
          <div ref={quickColRef}>
            <h4 className="font-archivo font-bold text-white text-[15px] mb-6 m-0 tracking-wide">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
              {QUICK_LINKS.map(link => {
                const hasHandler =
                  (link.action === 'about'    && !!onOpenAbout)    ||
                  (link.action === 'products' && !!onOpenProducts) ||
                  (link.action === 'faq'      && !!onOpenFAQ)
                const resolvedHref = link.href ?? (hasHandler ? null : link.fallback)
                const linkCls = 'text-sm no-underline transition-colors'
                const linkStyle = { color: 'var(--text-body)' }
                const hoverOn  = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.color = '#C5F23C' }
                const hoverOff = (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-body)' }
                return (
                  <li key={link.label}>
                    {resolvedHref ? (
                      <Link href={resolvedHref} className={linkCls} style={linkStyle}
                            onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={e => handleQuickLink(link.action, e as unknown as React.MouseEvent)}
                        className="text-sm bg-transparent border-0 p-0 cursor-pointer transition-colors text-left"
                        style={{ color: 'var(--text-body)', fontFamily: 'inherit' }}
                        onMouseEnter={hoverOn} onMouseLeave={hoverOff}
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ── Services ── */}
          <div ref={svcColRef}>
            <h4 className="font-archivo font-bold text-white text-[15px] mb-6 m-0 tracking-wide">
              Services
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
              {SERVICES.map(s => (
                <li key={s}>
                  <span
                    className="text-sm cursor-default transition-colors"
                    style={{ color: 'var(--text-body)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div ref={dividerRef} className="h-px mt-14 mb-7" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* ── Bottom bar ── */}
        <div ref={bottomRef} className="flex items-center justify-between gap-5 flex-wrap pb-9">
          <div ref={socialsRef} className="flex items-center gap-[10px]">
            <SocialBtn href="#" label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" opacity="0.9"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" label="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialBtn>
            <SocialBtn href="#" label="Behance">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]">
                <path d="M8.228 10.01c.356-.39.534-.882.534-1.476 0-.6-.147-1.1-.44-1.498-.294-.399-.77-.6-1.43-.6H2v8.128h5.01c.696 0 1.236-.21 1.618-.628.382-.418.573-.944.573-1.578 0-.622-.158-1.12-.473-1.49-.315-.37-.5-.556-.5-.858zm-4.568-2.374h2.19c.33 0 .589.09.773.27.185.18.277.434.277.764 0 .33-.092.583-.277.757-.184.174-.443.261-.773.261H3.66V7.636zm3.11 5.018c-.2.198-.47.297-.809.297H3.66v-2.26h2.3c.339 0 .61.1.81.3.2.2.299.467.299.8 0 .331-.1.6-.298.863zm4.47 1.346h5.736v-.836H11.24v.836zm2.57-6.636c-.614 0-1.14.118-1.58.355-.44.236-.785.58-1.035 1.03-.25.45-.376.99-.376 1.62 0 .633.125 1.17.376 1.614.25.443.598.78 1.045 1.01.447.23.976.345 1.586.345.768 0 1.396-.193 1.882-.578.487-.386.785-.918.895-1.596h-1.22c-.09.337-.27.604-.543.8-.273.196-.617.294-1.03.294-.46 0-.841-.14-1.142-.42-.3-.28-.468-.69-.505-1.23h4.503c.01-.108.016-.213.016-.314 0-.632-.128-1.165-.384-1.6-.256-.434-.613-.765-1.07-.993-.458-.228-.987-.342-1.586-.342l-.028.005zm-1.37 2.422c.05-.446.22-.793.51-1.04.29-.247.645-.37 1.068-.37.43 0 .784.12 1.063.36.28.24.434.59.464 1.05h-3.105z"/>
              </svg>
            </SocialBtn>
          </div>

          <Link
            ref={privacyRef}
            href="/privacy-policy"
            className="text-xs no-underline transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Privacy &amp; Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
