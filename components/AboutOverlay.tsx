'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NumberTicker } from '@/components/ui/number-ticker'

/* ─── Data ─── */
const team = [
  {
    name: 'Sushree Jyotirmayee Sahoo',
    role: 'Team Lead',
    specialty: 'Leadership, Strategy & Client Success',
    initials: 'SJS',
    photo: '/images/sushree.jpeg',
    color: '#0ea5e9',
    bio: 'Sushree leads the team with a sharp eye for strategy and an unwavering commitment to client outcomes. She aligns every project with business goals and keeps the team moving at its best.',
    skills: ['Team Leadership', 'Strategy', 'Client Relations', 'Project Management'],
    linkedin: 'https://www.linkedin.com/in/sushree-jyotirmayee-sahoo-14067326b',
  },
  {
    name: 'Sandeep Nayak',
    role: 'Frontend Developer',
    specialty: 'UI Engineering & Web Performance',
    initials: 'SN',
    photo: '/images/sandeep.jpeg',
    color: '#7c3aed',
    bio: 'Sandeep builds pixel-perfect, high-performance interfaces. He turns complex designs into clean React and Next.js code — fast, accessible, and beautiful on every screen.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    linkedin: 'https://www.linkedin.com/in/sandeep-nayak-0547461a9',
  },
  {
    name: 'Subham Mishra',
    role: 'Full Stack Developer',
    specialty: 'End-to-End Engineering & AI',
    initials: 'SM',
    photo: '/images/subham.png',
    color: '#16a34a',
    bio: 'Subham owns the full stack — from pixel-perfect frontends to scalable APIs, cloud infrastructure, and AI integrations. He builds complete products that are fast, reliable, and ready to grow.',
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'AI/ML'],
    linkedin: 'https://www.linkedin.com/in/subham-mishra-7b4b2b1a9/',
  },
]

const PILLARS = [
  {
    num: '01',
    title: 'Strategy First',
    body: 'Every creative decision is rooted in a clear strategic brief. Beautiful work that doesn\'t solve a problem is just decoration.',
    accent: '#7c3aed',
    icon: 'strategy',
  },
  {
    num: '02',
    title: 'Craft in Every Pixel',
    body: 'We obsess over the details others skip — typography, motion, copy tone — because the finish is what separates good from remembered.',
    accent: '#059669',
    icon: 'craft',
  },
  {
    num: '03',
    title: 'Results, Always',
    body: 'We measure our work by the impact it creates for your business, not the awards it wins. Outcomes over everything.',
    accent: '#0ea5e9',
    icon: 'results',
  },
]

const stats = [
  { number: 50,  suffix: '+',  label: 'Projects delivered' },
  { number: 5,   suffix: '+',  label: 'Years in the industry' },
  { number: 98,  suffix: '%',  label: 'Client satisfaction' },
  { number: 12,  suffix: '+',  label: 'Happy clients' },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const HERO_WORDS = [
  { text: 'We',      highlight: false },
  { text: 'craft',   highlight: false },
  { text: 'bold',    highlight: false },
  { text: 'ideas',   highlight: true  },
  { text: 'into',    highlight: false },
  { text: 'lasting', highlight: false },
  { text: 'brands.',  highlight: false },
]

/* ─── Main component ─── */
export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  const panelRef  = useRef<HTMLDivElement>(null)
  const headRef   = useRef<HTMLHeadingElement>(null)

  const handleClose = () => {
    gsap.to(panelRef.current, {
      y: '100%', duration: 0.65, ease: 'power4.in', onComplete: onClose,
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(panelRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.75, ease: 'power4.out', clearProps: 'transform' }
    )

    if (headRef.current) {
      const words = headRef.current.querySelectorAll<HTMLElement>('.about-word')
      gsap.set(words, { opacity: 0.1 })
      gsap.to(words, {
        opacity: 1,
        stagger: 0.09,
        ease: 'none',
        scrollTrigger: {
          scroller: panelRef.current,
          trigger: headRef.current,
          start: 'top 85%',
          end: 'bottom 35%',
          scrub: 1.2,
        },
      })
    }

    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={panelRef}
      className="fixed left-0 right-0 bottom-0 z-[200] overflow-y-auto"
      data-lenis-prevent
      style={{ top: 'var(--banner-h, 0px)', background: '#ffffff', willChange: 'transform' }}
    >
      {/* ── Sticky nav ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-8 h-[62px]"
        style={{
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-[18px] h-[18px] text-[#7c3aed] flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
          <span className="text-[11px] font-bold tracking-[2.5px] uppercase" style={{ color: '#7c3aed' }}>About Us</span>
        </div>
        <button
          onClick={handleClose}
          className="flex items-center gap-2 text-sm font-semibold cursor-pointer bg-transparent border-0 transition-colors group"
          style={{ color: '#6b7280' }}
        >
          <span className="hidden sm:inline tracking-wide">Close</span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:bg-gray-100"
            style={{ border: '1px solid rgba(0,0,0,0.1)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
      </div>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        {/* ghost "ABOUT" watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-archivo font-black whitespace-nowrap leading-none"
            style={{ fontSize: 'clamp(120px, 20vw, 240px)', color: 'rgba(0,0,0,0.04)' }}
          >
            ABOUT
          </span>
        </div>

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">

        <motion.div
          className="inline-flex items-center gap-2 mb-7 px-4 py-[7px] rounded-full"
          style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[#7c3aed] inline-block" />
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#7c3aed]">Who we are</span>
        </motion.div>

        <h1
          ref={headRef}
          className="font-archivo font-black uppercase leading-[1.05] tracking-tight m-0 mb-7"
          style={{ fontSize: 'clamp(44px, 7.5vw, 100px)', color: '#0a0a0a' }}
        >
          {HERO_WORDS.map((w, i) => (
            <span key={i}>
              <span className="about-word inline-block">
                {w.highlight ? (
                  <span
                    className="bg-[#C5F23C] text-[#0a0a0a] px-[0.08em] rounded-[10px] inline-block"
                    style={{ transform: 'rotate(-1.5deg)' }}
                  >
                    {w.text}
                  </span>
                ) : w.text}
              </span>
              {i < HERO_WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <motion.p
          className="text-base sm:text-lg leading-[1.75] max-w-[560px] m-0"
          style={{ color: '#6b7280' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.56 }}
        >
          A creative agency built on the belief that design and strategy are inseparable. We partner with brands to craft identities, campaigns, and digital experiences that move people and drive real results.
        </motion.p>

        {/* divider */}
        <motion.div
          className="mt-12 sm:mt-16 mb-0 h-px"
          style={{ background: 'rgba(0,0,0,0.1)' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 mt-0"
          style={{ borderTop: 'none' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col gap-2 px-0 sm:px-6 py-7 sm:py-8"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.09)' : 'none',
                paddingLeft: i === 0 ? 0 : undefined,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.72 + i * 0.07 }}
            >
              <p className="font-archivo font-black leading-none m-0"
                 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#7c3aed' }}>
                <NumberTicker
                  value={s.number}
                  suffix={s.suffix}
                  delay={i * 80}
                  once={false}
                />
              </p>
              <p className="text-[11px] font-semibold tracking-[1.5px] uppercase m-0" style={{ color: '#9ca3af' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

      {/* ── Philosophy ── */}
      <div style={{ background: '#f5f3ff' }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-start">

            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <p className="text-[11px] font-bold tracking-[2.5px] uppercase mb-4" style={{ color: '#7c3aed' }}>
                Our philosophy
              </p>
              <h2
                className="font-archivo font-black leading-[1.04] tracking-tight m-0"
                style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#0a0a0a' }}
              >
                Great work lives at the intersection of craft and intention.
              </h2>
              <div className="mt-8 h-[3px] w-12 rounded-full" style={{ background: '#7c3aed' }} />
            </motion.div>

            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              {[
                { title: 'Strategy first', body: 'Every creative decision is rooted in a clear strategic brief. Beautiful work that doesn\'t solve a problem is decoration.' },
                { title: 'Craft in every pixel', body: 'We sweat the details others skip — typography, motion, copy tone — because the finish is what separates good from remembered.' },
                { title: 'Results, always', body: 'We measure our work by the impact it creates for your business, not the awards it wins.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div className="flex-none mt-[3px] w-[6px] h-[6px] rounded-full bg-[#7c3aed]" style={{ marginTop: 8 }} />
                  <div>
                    <p className="font-archivo font-bold m-0 mb-1" style={{ color: '#0a0a0a', fontSize: 15 }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-[1.7] m-0" style={{ color: '#6b7280' }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Pillars ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 sm:py-20">

          <motion.div
            className="flex flex-wrap items-end justify-between gap-4 mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-[11px] font-bold tracking-[2.5px] uppercase mb-3" style={{ color: '#7c3aed' }}>
                What drives us
              </p>
              <h2
                className="font-archivo font-black leading-tight m-0"
                style={{ fontSize: 'clamp(26px, 3.2vw, 42px)', color: '#0a0a0a' }}
              >
                Built different,{' '}
                <span
                  className="relative inline-block"
                  style={{
                    background: '#C5F23C',
                    color: '#0a0a0a',
                    padding: '0 0.1em',
                    borderRadius: 8,
                    transform: 'rotate(-1.2deg)',
                    display: 'inline-block',
                  }}
                >
                  by design.
                </span>
              </h2>
            </div>
            <p className="text-sm max-w-[240px] leading-relaxed hidden md:block" style={{ color: '#9ca3af' }}>
              Three principles that guide every project we touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {PILLARS.map((p, i) => <PillarCard key={p.num} pillar={p} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div style={{ background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-14 sm:py-20">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-bold tracking-[2.5px] uppercase mb-3 inline-block px-3 py-[5px] rounded-full"
               style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
              The people behind the work
            </p>
            <h2
              className="font-archivo font-black leading-tight m-0"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#0a0a0a' }}
            >
              Meet our team.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8">
            {team.map((member, i) => <TeamCard key={member.name} member={member} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── Closing CTA ── */}
      <div style={{ background: '#0a0a0a' }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center">
          <motion.p
            className="text-[11px] font-bold tracking-[2.5px] uppercase mb-5"
            style={{ color: '#C5F23C' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Let's work together
          </motion.p>
          <motion.h2
            className="font-archivo font-black leading-[1.0] tracking-tight m-0 mb-8"
            style={{ fontSize: 'clamp(30px, 4.5vw, 60px)', color: '#ffffff' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Ready to build something<br />
            <span style={{ color: '#C5F23C' }}>worth remembering?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-3 flex-wrap"
          >
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-8 py-[15px] rounded-full
                         font-semibold text-sm cursor-pointer border-0 transition-colors hover:opacity-90"
              style={{ background: '#C5F23C', color: '#0a0a0a' }}
            >
              Start a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                   strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
              </svg>
            </button>
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 px-8 py-[15px] rounded-full
                         font-semibold text-sm cursor-pointer bg-transparent transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              Back to site
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ─── Team Card ─── */
type TeamMember = (typeof team)[number]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-[20px] overflow-hidden flex flex-col cursor-default"
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? member.color + '35' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.14), 0 8px 24px ${member.color}18`
          : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.4s, border-color 0.3s, transform 0.4s',
        transform: hovered ? 'translateY(-10px) scale(1.012)' : 'translateY(0) scale(1)',
      }}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* diagonal shimmer sweep */}
      <motion.div
        className="absolute inset-y-0 z-[5] pointer-events-none"
        style={{
          width: '55%',
          background: `linear-gradient(105deg, transparent 0%, ${member.color}18 50%, transparent 100%)`,
        }}
        initial={{ x: '-130%' }}
        animate={{ x: hovered ? '280%' : '-130%' }}
        transition={{ duration: hovered ? 0.65 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* radial glow at top on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 pointer-events-none z-[4]"
        style={{
          height: 180,
          background: `radial-gradient(ellipse at 50% 0%, ${member.color}22 0%, transparent 70%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] z-10"
        style={{ background: `linear-gradient(90deg, ${member.color}, ${member.color}55)`, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* ── Photo ── */}
      <div className="relative overflow-hidden" style={{ height: 380 }}>
        {member.photo ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </motion.div>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${member.color}15 0%, ${member.color}08 100%)` }}
          >
            <span className="font-archivo font-black select-none"
              style={{ fontSize: 72, color: member.color, opacity: 0.6, letterSpacing: -3 }}>
              {member.initials}
            </span>
          </div>
        )}

        {/* subtle bottom fade — only 40px, rgba not solid white */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: 48, background: 'linear-gradient(to top, rgba(255,255,255,0.55), transparent)' }}
        />

        {/* role badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-[5px] rounded-full backdrop-blur-sm"
            style={{
              background: 'rgba(255,255,255,0.88)',
              color: member.color,
              border: `1px solid ${member.color}25`,
              boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
            }}
          >
            {member.role}
          </span>
        </div>

        {/* LinkedIn button — top right */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center
                     backdrop-blur-sm transition-transform hover:scale-110"
          style={{
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 1px 6px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
          onClick={e => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="#0a66c2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col gap-4 px-5 py-5 flex-1">

        {/* name + verified */}
        <div>
          <div className="flex items-center gap-[6px] mb-[5px]">
            <h3 className="font-archivo font-bold leading-tight m-0" style={{ fontSize: 16, color: '#0a0a0a' }}>
              {member.name}
            </h3>
            <svg viewBox="0 0 20 20" className="w-[15px] h-[15px] flex-none" style={{ color: '#3b9eeb' }}>
              <circle cx="10" cy="10" r="10" fill="currentColor" />
              <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#fff" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <p className="text-[11px] font-bold tracking-[1.8px] uppercase m-0" style={{ color: member.color }}>
            {member.specialty}
          </p>
        </div>

        {/* divider */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

        {/* bio */}
        <p className="text-[13px] leading-[1.78] m-0 flex-1" style={{ color: '#6b7280' }}>
          {member.bio}
        </p>

        {/* skills */}
        <div className="flex flex-wrap gap-[6px]">
          {member.skills.map((skill) => (
            <motion.span
              key={skill}
              className="text-[10px] font-bold tracking-[1px] uppercase px-[9px] py-[4px] rounded-full border"
              style={{ fontFamily: 'var(--font-roboto-mono), monospace' }}
              animate={hovered ? {
                background: `${member.color}10`,
                color: member.color,
                borderColor: `${member.color}35`,
              } : {
                background: '#f5f5f7',
                color: '#9ca3af',
                borderColor: 'rgba(0,0,0,0.07)',
              }}
              transition={{ duration: 0.2 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* footer with LinkedIn */}
        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <p className="text-[11px] font-semibold m-0" style={{ color: '#9ca3af' }}>
            Connect on LinkedIn
          </p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-semibold rounded-full px-4 py-[7px]
                       transition-colors hover:opacity-80"
            style={{
              background: '#0a66c2',
              color: '#ffffff',
            }}
            onClick={e => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" className="w-[12px] h-[12px]" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View Profile
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Pillar Card ─── */
function PillarIcon({ type, color }: { type: string; color: string }) {
  if (type === 'strategy') return (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <circle cx="16" cy="16" r="7" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="16" r="2.5" fill={color} />
      <line x1="16" y1="2" x2="16" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="25" x2="16" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="16" x2="7" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="16" x2="30" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
  if (type === 'craft') return (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <path d="M16 3 L18.5 11.5 L27 11.5 L20.5 17 L23 25.5 L16 20.5 L9 25.5 L11.5 17 L5 11.5 L13.5 11.5 Z"
            stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={`${color}20`} />
    </svg>
  )
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
      <polyline points="3,22 11,13 17,18 29,7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,7 29,7 29,14" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="27" x2="29" y2="27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  )
}

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-[20px] overflow-hidden flex flex-col cursor-default p-7 sm:p-8"
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? pillar.accent + '40' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: hovered
          ? `0 16px 40px rgba(0,0,0,0.08), 0 0 0 0px ${pillar.accent}20`
          : '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.35s, border-color 0.35s, transform 0.35s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: pillar.accent, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* subtle bg tint on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(ellipse at 30% 0%, ${pillar.accent}06 0%, transparent 70%)` }}
      />

      {/* ghost number */}
      <div
        className="absolute bottom-3 right-5 font-archivo font-black select-none pointer-events-none leading-none"
        style={{ fontSize: 80, color: pillar.accent, opacity: hovered ? 0.07 : 0.04, transition: 'opacity 0.4s' }}
      >
        {pillar.num}
      </div>

      <div className="relative z-[1] flex flex-col gap-6 h-full">
        {/* icon */}
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-none"
          style={{ background: `${pillar.accent}12`, border: `1px solid ${pillar.accent}20` }}
        >
          <PillarIcon type={pillar.icon} color={pillar.accent} />
        </div>

        <span className="text-[10px] font-bold tracking-[2.5px] font-mono" style={{ color: pillar.accent, opacity: 0.7 }}>
          {pillar.num}
        </span>

        <motion.h3
          className="font-archivo font-black leading-tight m-0"
          style={{ fontSize: 'clamp(20px, 2.2vw, 28px)' }}
          animate={{ color: hovered ? pillar.accent : '#0a0a0a' }}
          transition={{ duration: 0.3 }}
        >
          {pillar.title}
        </motion.h3>

        <p className="text-[14px] leading-[1.75] m-0 flex-1" style={{ color: '#6b7280' }}>
          {pillar.body}
        </p>

        {/* bottom row */}
        <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <motion.div
            className="h-[2px] rounded-full"
            style={{ background: pillar.accent, transformOrigin: 'left' }}
            animate={{ width: hovered ? '50%' : '20px' }}
            transition={{ duration: 0.45, ease: EASE }}
          />
          <motion.svg
            viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: pillar.accent }}
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <line x1="4" y1="16" x2="16" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <polyline points="8,4 16,4 16,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  )
}
