'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Project } from '@/lib/types'

interface Props { project: Project; onClose: () => void }

export default function ProjectOverlay({ project, onClose }: Props) {
  const panelRef  = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    gsap.to(panelRef.current, {
      y: '100%',
      duration: 0.65,
      ease: 'power4.in',
      onComplete: onClose,
    })
  }

  useEffect(() => {
    // Slide panel up from bottom
    gsap.fromTo(
      panelRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.75, ease: 'power4.out', clearProps: 'transform' }
    )

    // Escape key
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Year',   value: project.year   },
    { label: 'Role',   value: project.role   },
  ]

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: 'var(--dark)', willChange: 'transform' }}
    >
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-7 h-[60px]"
           style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-3">
          <span className="w-[20px] h-[20px] text-purple flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
          <span className="text-xs font-bold tracking-[2px] uppercase text-muted">
            {project.category}
          </span>
        </div>

        <button
          onClick={handleClose}
          className="flex items-center gap-2 text-sm font-semibold text-muted cursor-pointer
                     bg-transparent border-0 hover:text-[color:var(--text)] transition-colors group"
        >
          <span className="hidden sm:inline">Close</span>
          <span className="w-9 h-9 rounded-full flex items-center justify-center
                           border border-white/20 group-hover:border-white/50 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Hero image with editorial title overlay ── */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 58vh, 620px)' }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* gradient overlay */}
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.45) 50%, rgba(10,10,11,0.1) 100%)' }} />

        {/* title overlaid on hero */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-7 pb-7 sm:pb-10 max-w-[1180px] mx-auto">
          <motion.p
            className="text-xs font-bold tracking-[2.5px] uppercase mb-3"
            style={{ color: project.accent === '#0B0B0B' ? '#C5F23C' : project.accent }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.category}
          </motion.p>
          <motion.h1
            className="font-archivo font-black leading-[0.95] tracking-tight text-white m-0"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="mt-4 text-base leading-[1.55] max-w-[560px] m-0 mt-3"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {project.tagline}
          </motion.p>
        </div>
      </motion.div>

      {/* ── Scrollable content ── */}
      <div ref={contentRef} className="max-w-[1180px] mx-auto px-4 sm:px-7 py-10 sm:py-14">

        {/* Meta strip */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-6 pb-8 sm:pb-10 mb-8 sm:mb-10"
          style={{ borderBottom: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {meta.map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] tracking-[2px] uppercase text-muted m-0">{label}</p>
              <p className="text-[17px] font-semibold mt-[6px] m-0 text-white">{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Two-column body */}
        <div className="grid gap-10 md:gap-16 grid-cols-1 md:[grid-template-columns:1.1fr_0.9fr]">

          {/* left: overview + challenge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Section title="Overview" body={project.overview} />
            <Section title="The challenge" body={project.challenge} />
          </motion.div>

          {/* right: services + results */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* services */}
            <div>
              <h3 className="font-archivo font-bold text-[18px] mb-4 text-white">What we delivered</h3>
              <div className="flex flex-wrap gap-[8px]">
                {project.services.map((s, i) => (
                  <motion.span
                    key={s}
                    className="text-sm font-semibold px-4 py-[9px] rounded-full"
                    style={{ background: 'rgba(108,43,217,0.18)', color: '#b99dff' }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 1.0 + i * 0.07 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* results */}
            <div>
              <h3 className="font-archivo font-bold text-[18px] mb-4 text-white">Results</h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 rounded-[22px] p-5 sm:p-7"
                   style={{ background: 'var(--elevated)', border: '1px solid var(--border)' }}>
                {project.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 1.1 + i * 0.1 }}
                  >
                    <p className="font-archivo font-extrabold leading-none text-lime m-0"
                       style={{ fontSize: 'clamp(26px,3vw,38px)' }}>{r.value}</p>
                    <p className="text-xs text-muted mt-2 leading-[1.4] m-0">{r.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* accent bar */}
            <div className="rounded-[18px] p-6"
                 style={{ background: project.accent === '#0B0B0B' ? '#111' : project.accent + '22',
                          border: `1px solid ${project.accent === '#0B0B0B' ? 'rgba(255,255,255,0.08)' : project.accent + '55'}` }}>
              <p className="text-sm leading-[1.65] m-0"
                 style={{ color: project.accent === '#0B0B0B' ? '#9a9a9a' : 'rgba(255,255,255,0.85)' }}>
                &ldquo;{project.tagline}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom action */}
        <motion.div
          className="flex flex-wrap justify-between items-center gap-4 mt-12 sm:mt-16 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <span className="text-xs tracking-[2px] uppercase text-muted">
            {project.year} — {project.client}
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
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="11 18 5 12 11 6" />
            </svg>
            Back to work
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-10">
      <h3 className="font-archivo font-bold text-[20px] mb-3 text-white">{title}</h3>
      <p className="text-[15px] leading-[1.75] m-0" style={{ color: 'var(--text-body)' }}>{body}</p>
    </div>
  )
}
