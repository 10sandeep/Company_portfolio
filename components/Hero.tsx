'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { NumberTicker } from '@/components/ui/number-ticker'

export default function Hero() {
  const entersRef = useRef<HTMLDivElement>(null)
  const [btnHovered, setBtnHovered] = useState(false)

  useEffect(() => {
    const root = entersRef.current
    if (!root) return
    const enters = [...root.querySelectorAll<HTMLElement>('[data-enter]')]
    gsap.set(enters, { opacity: 0, y: 32 })
    gsap.to(enters, {
      opacity: 1, y: 0,
      duration: 0.9, stagger: 0.12,
      ease: 'power3.out', delay: 1.4,
    })
  }, [])

  return (
    <section
      id="home"
      ref={entersRef as React.RefObject<HTMLDivElement>}
      className="relative w-full flex flex-col overflow-hidden"
      style={{ height: '100dvh', minHeight: '100svh', scrollMarginTop: '80px' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Hero background"
          fill priority
          className="object-cover"
        />
        {/* gradient overlay — darker at edges, lighter in center */}
        <div className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(4,2,14,0.55) 0%, rgba(4,2,14,0.35) 40%, rgba(4,2,14,0.55) 75%, rgba(4,2,14,0.92) 100%)',
          }}
        />
      </div>

      {/* Noise grain */}
      <div
        className="absolute inset-0 -z-[5] pointer-events-none opacity-[0.55] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '160px 160px',
        }}
      />

      {/* Main content — centred vertically */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 pb-10"
        style={{ paddingTop: 'calc(var(--banner-h, 0px) + 120px)' }}
      >

        {/* Tag pill */}
        <div
          data-enter
          className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full mb-6 sm:mb-8 text-xs font-semibold tracking-[2px] uppercase"
          style={{
            background: 'rgba(124,58,237,0.18)',
            color: '#c4b5fd',
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-purple inline-block" />
          Full-Stack Developer &amp; Designer
        </div>

        {/* Headline */}
        <h1
          data-enter
          className="font-archivo font-extrabold leading-[1.06] tracking-tight text-white mx-auto"
          style={{ fontSize: 'clamp(38px, 7vw, 90px)', maxWidth: '900px' }}
        >
          Elevate Your Brand<br />
          with Our{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(90deg, #a78bfa 0%, #c4b5fd 50%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Creative
          </span>{' '}
          Magic
        </h1>

        {/* Sub-description */}
        <p
          data-enter
          className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed mx-auto"
          style={{ color: 'rgba(255,255,255,0.62)', maxWidth: '520px' }}
        >
          We craft high-performance apps, stunning websites, and intelligent
          automation that help your business grow faster.
        </p>

        {/* CTA buttons */}
        <div data-enter className="flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10">
          {/* Primary */}
          <motion.div
            onHoverStart={() => setBtnHovered(true)}
            onHoverEnd={() => setBtnHovered(false)}
            animate={{
              y: btnHovered ? -2 : 0,
              boxShadow: btnHovered
                ? '0 0 0 1px rgba(124,58,237,0.7), 0 10px 32px rgba(124,58,237,0.6)'
                : '0 0 0 1px rgba(124,58,237,0.5), 0 6px 24px rgba(124,58,237,0.45)',
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-full"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full
                         text-sm font-bold text-white no-underline"
            >
              Get In Touch
              <motion.svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"
                strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"
                animate={{ x: btnHovered ? 4 : 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Secondary */}
          <a href="#product" className="no-underline">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="inline-flex items-center gap-2 px-7 py-[14px] text-sm font-bold text-white"
            >
              Explore My Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"
                strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
              </svg>
            </HoverBorderGradient>
          </a>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div
        data-enter
        className="relative z-10 w-full border-t px-4 sm:px-10 py-4 sm:py-5"
        style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(4,2,14,0.55)' }}
      >
        <div className="max-w-[1080px] mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Trusted by <NumberTicker value={20} suffix="+" className="text-white font-bold" /> startups &amp; businesses
          </p>

          {/* Platform availability */}
          <div className="flex items-center gap-2">
            {/* iOS */}
            <div className="flex items-center gap-[7px] px-3 py-[6px] rounded-full"
                 style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-none" fill="rgba(255,255,255,0.75)">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-[10px] font-bold tracking-[1px]" style={{ color: 'rgba(255,255,255,0.7)' }}>iOS</span>
            </div>

            {/* Android */}
            <div className="flex items-center gap-[7px] px-3 py-[6px] rounded-full"
                 style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] flex-none" fill="rgba(255,255,255,0.75)">
                <path d="M17.523 15.341c-.3 0-.545-.246-.545-.545V9.203c0-.3.245-.545.545-.545s.545.245.545.545v5.593c0 .299-.244.545-.545.545zm-11.046 0c-.3 0-.545-.246-.545-.545V9.203c0-.3.245-.545.545-.545s.545.245.545.545v5.593c-.001.299-.245.545-.545.545zm1.603 2.977c0 .3-.245.545-.545.545h-.6c-.3 0-.545-.245-.545-.545v-2.236h1.69v2.236zm7.84 0c0 .3-.244.545-.544.545h-.6c-.3 0-.545-.245-.545-.545v-2.236h1.689v2.236zm.963-9.501H8.117c-.006.112-.01.225-.01.339v7.38c0 .3.245.545.545.545h6.696c.3 0 .545-.245.545-.545V9.157c0-.115-.004-.228-.01-.34zM8.917 6.04l-.82-1.42a.22.22 0 0 0-.301-.08.22.22 0 0 0-.08.3l.84 1.455C7.394 6.87 6.71 7.952 6.632 9.2h10.736c-.078-1.249-.762-2.33-1.924-2.904l.84-1.456a.22.22 0 0 0-.08-.3.22.22 0 0 0-.3.08l-.82 1.421A5.58 5.58 0 0 0 12 5.556a5.58 5.58 0 0 0-3.083.484zm3.083-1.04a.612.612 0 1 1 0 1.224.612.612 0 0 1 0-1.224zm-2.25.544a.612.612 0 1 1 0 1.224.612.612 0 0 1 0-1.224z"/>
              </svg>
              <span className="text-[10px] font-bold tracking-[1px]" style={{ color: 'rgba(255,255,255,0.7)' }}>Android</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
            {['React', 'Next.js', 'Flutter', 'Node.js', 'Figma'].map(tech => (
              <span key={tech} className="text-[10px] sm:text-xs font-bold tracking-[1.5px] uppercase"
                style={{ color: 'rgba(255,255,255,0.32)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
