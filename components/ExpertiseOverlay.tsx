'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export type ExpertiseKey = 'app' | 'web' | 'uiux'

interface Detail {
  title: string
  category: string
  tagline: string
  accent: string
  heroNum: string
  overview: string
  challenge: string
  process: { step: string; label: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  quote: string
}

const DATA: Record<ExpertiseKey, Detail> = {
  app: {
    title: 'App Development',
    category: 'Mobile Applications',
    tagline: 'Native & cross-platform apps that perform beautifully on every device.',
    accent: '#6C2BD9',
    heroNum: '01',
    overview:
      'We build high-performance native and cross-platform mobile applications for iOS and Android. From concept to launch, our team manages architecture, design systems, API integration, and app store submission — delivering apps that users love and return to.',
    challenge:
      'Mobile users demand instant load times, fluid animations, and offline reliability. We architect every app with performance budgets, optimistic UI patterns, and robust state management so your product feels premium regardless of network conditions or device age.',
    process: [
      { step: '01', label: 'Discovery & Scoping' },
      { step: '02', label: 'UI/UX Prototyping' },
      { step: '03', label: 'Development Sprints' },
      { step: '04', label: 'QA & Beta Testing' },
      { step: '05', label: 'App Store Submission' },
      { step: '06', label: 'Post-launch Support' },
    ],
    capabilities: [
      'React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)',
      'Push Notifications', 'Offline-first', 'Deep Links', 'App Store Publishing',
    ],
    stats: [
      { value: '15+',   label: 'Apps launched' },
      { value: '4.8★',  label: 'Avg store rating' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    quote: 'Every tap, swipe, and scroll is an opportunity to delight — we engineer those moments with intention.',
  },
  web: {
    title: 'Web Development',
    category: 'Web & Full-Stack',
    tagline: 'Fast, scalable websites and web apps engineered from frontend to infrastructure.',
    accent: '#C5F23C',
    heroNum: '02',
    overview:
      'We craft performant, visually stunning websites and web applications. From marketing sites to complex SaaS platforms, we handle every layer — React/Next.js frontend, Node.js backend, PostgreSQL database, and cloud deployment on AWS and Vercel.',
    challenge:
      'The web demands speed, SEO visibility, and cross-browser consistency. We obsess over Core Web Vitals, implement server-side rendering where it matters, and use edge caching strategies to serve sub-second experiences to users worldwide.',
    process: [
      { step: '01', label: 'Strategy & Architecture' },
      { step: '02', label: 'Design System Setup' },
      { step: '03', label: 'Frontend Build' },
      { step: '04', label: 'API & Backend' },
      { step: '05', label: 'Performance Audit' },
      { step: '06', label: 'Deploy & Monitor' },
    ],
    capabilities: [
      'Next.js', 'React', 'Node.js', 'PostgreSQL',
      'GraphQL', 'Tailwind CSS', 'AWS / Vercel', 'CI/CD Pipelines',
    ],
    stats: [
      { value: '30+', label: 'Sites shipped' },
      { value: '<1s',  label: 'Avg load time' },
      { value: '100',  label: 'Lighthouse score' },
    ],
    quote: 'Speed is not a feature — it is the foundation everything else is built on.',
  },
  uiux: {
    title: 'UI/UX Design',
    category: 'Design & Experience',
    tagline: 'Human-centered interfaces that are intuitive, accessible, and pixel-perfect.',
    accent: '#19b3c6',
    heroNum: '03',
    overview:
      'We design digital experiences that feel inevitable — where every button, spacing choice, and micro-interaction has a clear purpose. Our process starts with deep user research and ends with developer-ready Figma files and interactive prototypes.',
    challenge:
      'Great design is invisible. Users should never think about the interface — they should simply achieve their goal. We eliminate friction through usability testing, heuristic reviews, and iterative prototyping before a single line of code is written.',
    process: [
      { step: '01', label: 'User Research' },
      { step: '02', label: 'Information Architecture' },
      { step: '03', label: 'Wireframing' },
      { step: '04', label: 'Visual Design' },
      { step: '05', label: 'Interactive Prototype' },
      { step: '06', label: 'Developer Handoff' },
    ],
    capabilities: [
      'Figma', 'ProtoPie', 'Design Systems', 'Accessibility (WCAG 2.1)',
      'Motion Design', 'User Testing', 'Component Libraries', 'Brand Identity',
    ],
    stats: [
      { value: '50+', label: 'Screens designed' },
      { value: '98%', label: 'Client satisfaction' },
      { value: '3d',  label: 'Avg turnaround' },
    ],
    quote: 'Good design solves problems. Great design makes you forget there was ever a problem to solve.',
  },
}

interface Props { expertiseKey: ExpertiseKey; onClose: () => void }

export default function ExpertiseOverlay({ expertiseKey, onClose }: Props) {
  const item = DATA[expertiseKey]
  const panelRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    gsap.to(panelRef.current, { y: '100%', duration: 0.65, ease: 'power4.in', onComplete: onClose })
  }

  useEffect(() => {
    gsap.fromTo(panelRef.current, { y: '100%' }, { y: '0%', duration: 0.75, ease: 'power4.out', clearProps: 'transform' })
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const capPillColor = item.accent === '#C5F23C' ? '#b8e034' : item.accent === '#19b3c6' ? '#5ad7e8' : '#b99dff'

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: 'var(--dark)', willChange: 'transform', scrollBehavior: 'smooth' }}
    >
      {/* ── Sticky top bar ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-7 h-[60px]"
        style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-3">
          <span className="w-[20px] h-[20px] text-purple flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
          <span className="text-xs font-bold tracking-[2px] uppercase text-muted">{item.category}</span>
        </div>
        <button
          onClick={handleClose}
          className="flex items-center gap-2 text-sm font-semibold text-muted cursor-pointer
                     bg-transparent border-0 hover:text-[color:var(--text)] transition-colors group"
        >
          <span className="hidden sm:inline">Close</span>
          <span className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/50 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </span>
        </button>
      </div>

      {/* ── Hero ── */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(300px, 52vh, 540px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(140deg, ${item.accent}28 0%, var(--dark) 65%)` }}
        />

        {/* subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
          <defs>
            <pattern id={`grid-${expertiseKey}`} width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${expertiseKey})`}/>
        </svg>

        {/* ghost number — top right */}
        <div
          className="absolute top-0 right-0 font-archivo font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(180px, 25vw, 320px)', color: item.accent, opacity: 0.055, lineHeight: 0.85, right: '3%', top: '-5%' }}
        >
          {item.heroNum}
        </div>

        {/* left accent bar */}
        <motion.div
          className="absolute left-0 top-0 w-[3px] h-full"
          style={{ background: item.accent }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* titles at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-7 pb-8 sm:pb-12 max-w-[1180px] mx-auto">
          <motion.p
            className="text-xs font-bold tracking-[2.5px] uppercase mb-3"
            style={{ color: item.accent }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {item.category}
          </motion.p>
          <motion.h1
            className="font-archivo font-black leading-[0.95] tracking-tight text-white m-0"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)' }}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.title}
          </motion.h1>
          <motion.p
            className="mt-3 text-base leading-[1.55] max-w-[560px] m-0"
            style={{ color: 'var(--text-body)' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {item.tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* ── Body ── */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-10 sm:py-14">
        <div className="grid gap-10 md:gap-16 grid-cols-1 md:[grid-template-columns:1.1fr_0.9fr]">

          {/* Left: overview + challenge + process */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <BodySection title="Overview" body={item.overview} />
            <BodySection title="The Challenge" body={item.challenge} />

            <div className="mb-10">
              <h3 className="font-archivo font-bold text-[20px] mb-5 text-white">Our Process</h3>
              <div className="flex flex-col gap-[10px]">
                {item.process.map(({ step, label }) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 px-5 py-[13px] rounded-[12px]"
                    style={{ background: 'var(--elevated)' }}
                  >
                    <span
                      className="text-[11px] font-bold tracking-[2px] font-mono flex-none"
                      style={{ color: item.accent }}
                    >
                      {step}
                    </span>
                    <span className="text-[14px] font-medium text-white">{label}</span>
                    <span className="ml-auto w-1.5 h-1.5 rounded-full flex-none" style={{ background: item.accent, opacity: 0.5 }} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: capabilities + stats + quote */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* capabilities */}
            <div>
              <h3 className="font-archivo font-bold text-[18px] mb-4 text-white">Capabilities</h3>
              <div className="flex flex-wrap gap-[8px]">
                {item.capabilities.map((c, i) => (
                  <motion.span
                    key={c}
                    className="text-sm font-semibold px-4 py-[9px] rounded-full"
                    style={{ background: item.accent + '1a', color: capPillColor }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 1.0 + i * 0.06 }}
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* stats */}
            <div>
              <h3 className="font-archivo font-bold text-[18px] mb-4 text-white">By the numbers</h3>
              <div
                className="grid grid-cols-3 gap-3 sm:gap-4 rounded-[22px] p-5 sm:p-7"
                style={{ background: 'var(--elevated)' }}
              >
                {item.stats.map((r, i) => (
                  <motion.div
                    key={r.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 1.1 + i * 0.1 }}
                  >
                    <p
                      className="font-archivo font-extrabold leading-none m-0"
                      style={{ fontSize: 'clamp(24px,2.8vw,36px)', color: '#C5F23C' }}
                    >
                      {r.value}
                    </p>
                    <p className="text-xs text-muted mt-2 leading-[1.4] m-0">{r.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* quote */}
            <div
              className="rounded-[18px] p-6"
              style={{ background: item.accent + '12' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mb-3" style={{ color: item.accent, opacity: 0.7 }}>
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.077-1.928.71-2.932.634-1.003 1.517-1.692 2.65-2.067L9.47 6.087a7.4 7.4 0 00-2.755 1.63 7.4 7.4 0 00-1.74 2.506 7.4 7.4 0 00-.573 2.765c0 1.498.396 2.715 1.189 3.651.793.936 1.85 1.404 3.17 1.404.97 0 1.79-.308 2.462-.926.672-.617 1.008-1.41 1.008-2.377l-.04.019zM20.955 15.757c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.69-1.327-.815-.55-.124-1.07-.13-1.54-.022-.16-.95.077-1.932.71-2.936.633-1.003 1.517-1.696 2.65-2.071L20.23 6.087a7.4 7.4 0 00-2.755 1.63 7.4 7.4 0 00-1.74 2.506 7.4 7.4 0 00-.573 2.765c0 1.498.396 2.715 1.189 3.651.793.936 1.85 1.404 3.17 1.404.97 0 1.79-.308 2.462-.926.672-.617 1.008-1.41 1.008-2.377l-.04.019z"/>
              </svg>
              <p className="text-[14px] leading-[1.7] m-0 italic" style={{ color: 'var(--text-body)' }}>
                {item.quote}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-wrap justify-between items-center gap-4 mt-12 sm:mt-16 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <span className="text-xs tracking-[2px] uppercase text-muted font-mono">
            Sandeep Nayak — {item.category}
          </span>
          <button
            onClick={handleClose}
            className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full font-semibold text-sm
                       cursor-pointer border bg-transparent transition-all duration-200
                       text-[color:var(--text-sub)] hover:bg-lime hover:text-dark hover:border-lime"
            style={{ borderColor: 'var(--border)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="11 18 5 12 11 6"/>
            </svg>
            Back to Expertise
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function BodySection({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-10">
      <h3 className="font-archivo font-bold text-[20px] mb-3 text-white">{title}</h3>
      <p className="text-[15px] leading-[1.75] m-0" style={{ color: 'var(--text-body)' }}>{body}</p>
    </div>
  )
}
