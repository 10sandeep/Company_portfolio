'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const entersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = entersRef.current
    if (!root) return

    const enters = [...root.querySelectorAll<HTMLElement>('[data-enter]')]

    // Set initial hidden state immediately so no flash before curtain lifts
    gsap.set(enters, { opacity: 0, y: 40 })

    // Staggered entrance after curtain finishes (~1.3s)
    gsap.to(enters, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.13,
      ease: 'power3.out',
      delay: 1.45,
    })

    // Parallax on scroll
    const pxEls = [...root.querySelectorAll<HTMLElement>('[data-parallax]')]
    const onScroll = () => {
      const vh = window.innerHeight
      pxEls.forEach(el => {
        const r = el.getBoundingClientRect()
        const off = (r.top + r.height / 2 - vh / 2) / vh
        const sp = parseFloat(el.getAttribute('data-parallax') || '0.2')
        el.style.transform = `translate3d(0, ${(-off * sp * 180).toFixed(1)}px, 0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" ref={entersRef as React.RefObject<HTMLDivElement>}
             className="relative max-w-[1180px] mx-auto px-5 sm:px-7 pt-12 sm:pt-16 pb-16 sm:pb-20 text-center min-h-[500px] sm:min-h-[620px]"
             style={{ scrollMarginTop: '80px' }}>

      {/* faint bg mark */}
      <div data-parallax="0.12"
           className="absolute top-[150px] pointer-events-none z-0"
           style={{ left: 'calc(50% - 240px)', width: 480, height: 480, color: '#16161a' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
          <rect x="22" y="22" width="56" height="56" rx="20" />
          <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* floating purple icon left — hidden on mobile */}
      <div data-parallax="0.4"
           className="hidden sm:block absolute top-[70px] left-[6px] w-[200px] h-[152px] z-[4]">
        <div className="w-full h-full flex items-center justify-center anim-float"
             style={{ ['--dur' as string]: '5.5s', transform: 'rotate(-6deg)' }}>
          <span className="w-16 h-16 text-purple opacity-50">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
        </div>
      </div>

      {/* floating lime star right — hidden on mobile */}
      <div data-parallax="0.3"
           className="hidden sm:block absolute top-[150px] right-0 w-[170px] h-[170px] z-[4]">
        <div className="w-full h-full flex items-center justify-center anim-float"
             style={{ ['--dur' as string]: '6.5s' }}>
          <span className="w-14 h-14 text-lime">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
              <path d="M50 2 C55 32 68 45 98 50 C68 55 55 68 50 98 C45 68 32 55 2 50 C32 45 45 32 50 2 Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* location pills — hidden on mobile to avoid overlap */}
      <div data-enter className="hidden sm:flex absolute top-[30px] right-[18px] flex-col gap-[7px] items-end z-[5]">
        <span className="bg-purple text-white text-[11px] font-bold px-[14px] py-[6px] rounded-full whitespace-nowrap">
          Bhubaneswar, Odisha
        </span>
        <span className="bg-lime text-dark text-[11px] font-bold px-[14px] py-[6px] rounded-full">
          India
        </span>
      </div>

      {/* subheading */}
      <p data-enter className="relative z-[3] text-sm text-[#9a9a9a] font-medium mt-2">
        Crafting Experiences that Inspire:
      </p>

      {/* main headline */}
      <h1 data-enter
          className="relative z-[3] font-archivo font-extrabold leading-[1.02] sm:leading-[0.98] tracking-tight mx-auto mt-3 max-w-[880px]"
          style={{ fontSize: 'clamp(36px,7.4vw,94px)' }}>
        Elevate Your Brand{' '}
        <span className="inline-flex bg-purple rounded-full text-white items-center justify-center align-middle p-[0.16em]"
              style={{ width: '0.86em', height: '0.86em', verticalAlign: '-0.1em' }}>
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
            <rect x="22" y="22" width="56" height="56" rx="20" />
            <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
          </svg>
        </span>{' '}
        with Our{' '}
        <span className="bg-lime text-dark px-[0.1em] rounded-[10px] inline-block"
              style={{ transform: 'rotate(-2deg)' }}>
          Creative
        </span>{' '}
        Magic
      </h1>

      {/* scroll down */}
      <div data-enter
           className="relative z-[3] flex items-center justify-center gap-[11px] mt-10 sm:mt-12 text-sm text-[#9a9a9a]">
        Scroll down
        <span className="anim-float w-[34px] h-[34px] rounded-full bg-purple text-white flex items-center justify-center"
              style={{ ['--dur' as string]: '3s' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
               strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="6 13 12 19 18 13" />
          </svg>
        </span>
      </div>
    </section>
  )
}
