'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'

const SEGMENTS = [
  { text: 'We',          highlight: false },
  { text: 'create',      highlight: false },
  { text: 'impactful',   highlight: true  },
  { text: 'experiences', highlight: false },
  { text: 'for',         highlight: false },
  { text: 'our',         highlight: false },
  { text: "clients'",    highlight: false },
  { text: 'customers',   highlight: false },
  { text: 'every',       highlight: false },
  { text: 'time',        highlight: false },
  { text: 'they',        highlight: false },
  { text: 'engage',      highlight: false },
  { text: 'with',        highlight: false },
  { text: 'a',           highlight: false },
  { text: 'brand',       highlight: false },
]

export default function Statement() {
  const headRef        = useRef<HTMLHeadingElement>(null)
  const badgeRef       = useRef<HTMLDivElement>(null)
  const counterWrapRef = useRef<HTMLDivElement>(null)
  const { ref: counterRef, inView: counterIn } = useInView()
  const { count, start } = useCounter(700)
  const started = useRef(false)

  useEffect(() => {
    if (counterIn && !started.current) { started.current = true; start() }
  }, [counterIn, start])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Word-by-word scroll-scrubbed reveal
    if (headRef.current) {
      const words = headRef.current.querySelectorAll<HTMLElement>('.reveal-word')
      gsap.set(words, { opacity: 0.14 })
      gsap.to(words, {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: headRef.current,
          start: 'top 80%',
          end: 'bottom 35%',
          scrub: 1.2,
        },
      })
    }

    // Badge pop-in
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.5, opacity: 0, rotate: -30 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }

    // Counter block slide up
    if (counterWrapRef.current) {
      gsap.fromTo(
        counterWrapRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counterWrapRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
          },
        }
      )
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <div className="max-w-[1180px] mx-auto px-5 sm:px-7 mt-12 pb-14">
      <div className="h-px bg-white/[0.06] mb-11" />
      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:[grid-template-columns:1.45fr_0.55fr]">

        {/* word-by-word scroll reveal heading */}
        <h2
          ref={headRef}
          className="font-archivo font-black uppercase m-0 text-white leading-[1.05] sm:leading-[0.97] tracking-tight"
          style={{ fontSize: 'clamp(28px,5.1vw,66px)' }}
        >
          {SEGMENTS.map((seg, i) => (
            <span key={i} className="reveal-word inline-block">
              {seg.highlight ? (
                <span
                  className="bg-lime text-dark px-[0.08em] rounded-[10px] inline-block"
                  style={{ transform: 'rotate(-1.5deg)' }}
                >
                  {seg.text}
                </span>
              ) : (
                seg.text
              )}
              {i < SEGMENTS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>

        <div className="flex flex-col items-start md:items-end gap-8 md:gap-10">
          {/* rotating badge */}
          <div ref={badgeRef} className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full flex-none" style={{ background:'#6C2BD9' }}>
            <svg className="anim-spin w-full h-full block" style={{ ['--dur' as string]:'16s' }} viewBox="0 0 200 200">
              <defs>
                <path id="cp1" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
              </defs>
              <text fill="#fff" style={{ fontFamily:'inherit', fontSize:17, fontWeight:700, letterSpacing:3 }}>
                <textPath href="#cp1" startOffset="0">LET&apos;S GET STARTED • LET&apos;S GET STARTED • </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-[46px] h-[46px] text-white block">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
                  <rect x="22" y="22" width="56" height="56" rx="20" />
                  <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
                </svg>
              </span>
            </span>
          </div>

          {/* counter */}
          <div
            ref={(el) => {
              (counterRef as React.MutableRefObject<HTMLDivElement | null>).current = el
              ;(counterWrapRef as React.MutableRefObject<HTMLDivElement | null>).current = el
            }}
            className="text-left md:text-right"
          >
            <div className="font-archivo font-extrabold leading-none tracking-tight"
                 style={{ fontSize: 'clamp(48px,5vw,68px)' }}>
              {count}<span className="text-lime">+</span>
            </div>
            <div className="text-sm text-muted mt-[6px] mb-[14px] pb-[14px] border-b border-white/[0.08]">
              Project Completed
            </div>
            <p className="m-0 text-xs text-[#7a7a7a] leading-[1.55] max-w-[320px] md:ml-auto">
              We take pride in our client success stories, where our creative strategies and execution have played a vital role in achieving their business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
