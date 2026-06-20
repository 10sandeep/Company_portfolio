'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const team = [
  {
    name: 'Sushree Jyotirmayee Sahoo',
    role: 'BDE',
    specialty: 'Business Development & Outreach',
    initials: 'SJS',
    photo: '/images/sushree.jpeg',
    color: '#19b3c6',
    bgFrom: '#0a1a1e',
    bgTo: '#060d10',
    bio: 'Sushree drives business growth by identifying the right opportunities and building strategic pipelines. She connects brands with clients that are the perfect fit.',
    skills: ['Lead Strategy', 'CRM', 'Market Research', 'Analytics'],
  },
  {
    name: 'Sandeep Nayak',
    role: 'Frontend Developer',
    specialty: 'UI Engineering & Web Performance',
    initials: 'SN',
    photo: '/images/sandeep.jpeg',
    color: '#6C2BD9',
    bgFrom: '#1a1228',
    bgTo: '#0d0b14',
    bio: 'Sandeep builds pixel-perfect, high-performance interfaces. He turns complex designs into clean React and Next.js code — fast, accessible, and beautiful on every screen.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Subham Mishra',
    role: 'Backend & AI/ML Developer',
    specialty: 'Architecture, Engineering & AI',
    initials: 'SM',
    photo: '/images/subham.png',
    color: '#C5F23C',
    bgFrom: '#141a0a',
    bgTo: '#0c0f06',
    bio: 'Subham powers everything under the hood. From scalable APIs and database architecture to machine learning models and AI integrations, he builds backend systems that are reliable, secure, intelligent and ready to grow.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'TensorFlow', 'AI/ML'],
  },
]

const videos = [
  {
    title: 'Agency Showreel 2024',
    category: 'Showreel',
    duration: '2:34',
    accent: '#6C2BD9',
    desc: 'A full-year look at our best creative work across brand, film and digital.',
  },
  {
    title: 'The Ordinary — Behind the Campaign',
    category: 'Case Study',
    duration: '4:12',
    accent: '#C5F23C',
    desc: 'How we rebuilt a skincare brand from clarity up — and shipped it to 30+ markets.',
  },
  {
    title: 'Our Creative Process',
    category: 'Behind the Scenes',
    duration: '3:47',
    accent: '#19b3c6',
    desc: 'From brief to launch — a walk through how ideas become campaigns at our studio.',
  },
]

const stats = [
  { value: '700+', label: 'Projects delivered' },
  { value: '12',   label: 'Industry awards' },
  { value: '30+',  label: 'Global markets' },
  { value: '8yrs', label: 'In the industry' },
]

export default function AboutOverlay({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    gsap.to(panelRef.current, {
      y: '100%',
      duration: 0.65,
      ease: 'power4.in',
      onComplete: onClose,
    })
  }

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.75, ease: 'power4.out', clearProps: 'transform' }
    )
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: 'var(--dark)', willChange: 'transform' }}
    >
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-7 h-[60px]"
           style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(14px)',
                    borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-3">
          <span className="w-[20px] h-[20px] text-lime flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
          <span className="text-xs font-bold tracking-[2.5px] uppercase text-muted">About Us</span>
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

      {/* ── Hero ── */}
      <div className="relative overflow-hidden px-4 sm:px-7 pt-12 sm:pt-16 pb-14 sm:pb-20 max-w-[1180px] mx-auto">
        {/* big background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-archivo font-black text-white/[0.025] whitespace-nowrap"
                style={{ fontSize: 'clamp(120px, 20vw, 240px)', lineHeight: 1 }}>
            ABOUT
          </span>
        </div>

        <motion.p
          className="text-lime font-bold text-xs tracking-[3px] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Who we are
        </motion.p>

        <motion.h1
          className="font-archivo font-black leading-[0.92] tracking-tight text-white m-0"
          style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
        >
          We turn bold<br />
          <span className="text-lime">ideas</span> into<br />
          lasting brands.
        </motion.h1>

        <motion.p
          className="mt-8 text-base leading-[1.7] max-w-[600px] text-muted"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          We are a creative agency built on the belief that design and strategy are inseparable. Since 2016, we have partnered with brands across 30+ markets to craft identities, campaigns and digital experiences that move people and drive results.
        </motion.p>

        {/* stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.82 + i * 0.08 }}
            >
              <p className="font-archivo font-extrabold text-lime leading-none m-0"
                 style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>{s.value}</p>
              <p className="text-xs text-muted mt-2 m-0 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── What we believe ── */}
      <div className="mx-2 sm:mx-[14px] rounded-[24px] sm:rounded-[32px] mb-6"
           style={{ background: 'var(--panel)', border: '1px solid var(--border-2)' }}>
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,56px)] py-12 sm:py-16">
          <motion.div
            className="grid gap-10 sm:gap-12 grid-cols-1 md:[grid-template-columns:1fr_1fr]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold tracking-[2.5px] uppercase text-purple-light mb-5">Our philosophy</p>
              <h2 className="font-archivo font-black text-white leading-[1.05] tracking-tight m-0"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
                Great work lives at the intersection of craft and intention.
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {[
                { title: 'Strategy first', body: 'Every creative decision is rooted in a clear strategic brief. Beautiful work that doesn\'t solve a problem is decoration.' },
                { title: 'Craft in every pixel', body: 'We sweat the details others skip — typography, motion, copy tone — because the finish is what separates good from remembered.' },
                { title: 'Results, always', body: 'We measure our work by the impact it creates for your business, not the awards it wins.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <p className="font-archivo font-bold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-muted leading-[1.65] m-0">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Video Reel ── */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-12 sm:py-16">
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-purple-light mb-3">Our work in motion</p>
            <h2 className="font-archivo font-black text-white leading-tight m-0"
                style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
              Watch what we've made.
            </h2>
          </div>
          <span className="text-sm text-muted hidden md:block">3 films</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-[22px] overflow-hidden cursor-pointer group relative"
              style={{ background: 'var(--elevated)', border: '1px solid var(--border-2)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* video thumbnail */}
              <div className="relative overflow-hidden" style={{ height: 200 }}>
                {/* animated gradient background */}
                <div className="absolute inset-0"
                     style={{ background: `linear-gradient(135deg, ${v.accent}33 0%, var(--elevated) 60%)` }} />
                {/* grid lines decoration */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {[0,1,2,3,4].map(r => (
                    <line key={`h${r}`} x1="0" y1={r*50} x2="400" y2={r*50} stroke={v.accent} strokeWidth="0.5"/>
                  ))}
                  {[0,1,2,3,4,5,6,7,8].map(c => (
                    <line key={`v${c}`} x1={c*50} y1="0" x2={c*50} y2="200" stroke={v.accent} strokeWidth="0.5"/>
                  ))}
                </svg>
                {/* waveform decoration */}
                <svg className="absolute bottom-4 left-4 right-4 opacity-30" viewBox="0 0 300 40" style={{ width: 'calc(100% - 32px)' }}>
                  {Array.from({ length: 40 }).map((_, j) => (
                    <rect key={j} x={j * 7.5} y={20 - Math.abs(Math.sin(j * 0.7 + i) * 18)}
                          width="4" height={Math.abs(Math.sin(j * 0.7 + i) * 18) * 2}
                          rx="2" fill={v.accent} />
                  ))}
                </svg>
                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: v.accent, boxShadow: `0 0 0 0 ${v.accent}66` }}
                    animate={{ boxShadow: [`0 0 0 0px ${v.accent}66`, `0 0 0 12px ${v.accent}00`] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5"
                         style={{ color: v.accent === '#C5F23C' ? '#0A0A0B' : '#fff' }}>
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </motion.div>
                </div>
                {/* duration */}
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-2 py-1 rounded-md"
                      style={{ background: 'rgba(0,0,0,0.7)', color: '#fff' }}>
                  {v.duration}
                </span>
                {/* category */}
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[1.5px] uppercase px-2 py-1 rounded-md"
                      style={{ background: v.accent + '33', color: v.accent }}>
                  {v.category}
                </span>
              </div>

              {/* card body */}
              <div className="p-5">
                <h3 className="font-archivo font-bold text-white text-[16px] leading-tight mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-[1.55] m-0">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Our Team ── */}
      <div className="mx-2 sm:mx-[14px] rounded-[24px] sm:rounded-[32px] mb-6"
           style={{ background: 'var(--panel)', border: '1px solid var(--border-2)' }}>
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,56px)] py-12 sm:py-16">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-purple-light mb-3">The people behind the work</p>
            <h2 className="font-archivo font-black text-white leading-tight m-0"
                style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              Meet our team.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Closing strip ── */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-12 sm:py-16 text-center">
        <motion.h2
          className="font-archivo font-black text-white leading-tight m-0 mb-6"
          style={{ fontSize: 'clamp(30px, 4vw, 54px)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Ready to build something<br />
          <span className="text-lime">worth remembering?</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={handleClose}
            className="inline-flex items-center gap-2 bg-lime text-dark px-7 py-[14px] rounded-full
                       font-semibold text-sm cursor-pointer border-0 hover:bg-white transition-colors"
          >
            Start a project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
            </svg>
          </button>
          <button
            onClick={handleClose}
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full
                       font-semibold text-sm cursor-pointer bg-transparent
                       text-white border border-white/20 hover:border-white/50 transition-colors"
          >
            Back to site
          </button>
        </motion.div>
      </div>
    </div>
  )
}

/* ── Team card — matches reference design ── */
type TeamMember = (typeof team)[number]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="rounded-[20px] overflow-hidden flex flex-col cursor-pointer relative"
      style={{
        background: member.bgTo,
        border: `1px solid ${hovered ? member.color + '55' : 'rgba(255,255,255,0.07)'}`,
        transition: 'border-color 0.35s, box-shadow 0.35s',
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${member.color}33, 0 0 40px ${member.color}18`
          : '0 4px 20px rgba(0,0,0,0.3)',
      }}
      initial={{ opacity: 0, y: 52, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── Top accent bar — slides in from left ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none rounded-t-[20px]"
        style={{ height: 2, background: `linear-gradient(90deg, ${member.color}, ${member.color}88)`, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Shimmer sweep — diagonal light strip ── */}
      <motion.div
        className="absolute inset-y-0 z-10 pointer-events-none"
        style={{
          width: '45%',
          background: `linear-gradient(90deg, transparent 0%, ${member.color}14 50%, transparent 100%)`,
        }}
        initial={{ x: '-120%' }}
        animate={{ x: hovered ? '340%' : '-120%' }}
        transition={{ duration: hovered ? 0.65 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* ── Image / initials area ── */}
      <div className="relative overflow-hidden" style={{ height: 320 }}>
        {/* background gradient */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(170deg, ${member.bgFrom} 0%, ${member.bgTo} 100%)` }}
        />

        {member.photo ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 10%' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ) : (
          <>
            <svg className="absolute inset-0 w-full h-full opacity-[0.035]" viewBox="0 0 300 320" preserveAspectRatio="none">
              <filter id={`noise-${index}`}>
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
              </filter>
              <rect width="300" height="320" filter={`url(#noise-${index})`}/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="font-archivo font-black select-none"
                style={{ fontSize: 'clamp(72px, 8vw, 96px)', color: member.color, letterSpacing: '-3px', lineHeight: 1 }}
                animate={{ opacity: hovered ? 0.45 : 0.8, scale: hovered ? 0.88 : 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {member.initials}
              </motion.span>
            </div>
          </>
        )}

        {/* edge blending — photo bg into card bg */}
        {member.photo && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(to bottom, ${member.bgTo}55 0%, transparent 12%, transparent 55%, ${member.bgTo} 100%),
                linear-gradient(to right,  ${member.bgTo}88 0%, transparent 18%, transparent 82%, ${member.bgTo}88 100%)
              `,
            }}
          />
        )}

        {/* accent colour tint overlay on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(to top, ${member.color}22 0%, transparent 60%)` }}
        />

        {/* bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: 72, background: `linear-gradient(to top, ${member.bgTo}, transparent)` }}
        />

        {/* role badge — pulses on hover */}
        <motion.div
          className="absolute bottom-3 left-4 z-10"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-[10px] font-bold tracking-[1.8px] uppercase px-[10px] py-[5px] rounded-full"
            style={{
              background: hovered ? member.color + '33' : member.color + '22',
              color: member.color,
              border: `1px solid ${hovered ? member.color + '88' : member.color + '44'}`,
              backdropFilter: 'blur(8px)',
              transition: 'background 0.3s, border-color 0.3s',
            }}
          >
            {member.role}
          </span>
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-4 px-6 pb-6 pt-3 flex-1" style={{ background: member.bgTo }}>

        {/* name + checkmark */}
        <div>
          <div className="flex items-center gap-[7px]">
            <h3 className="font-archivo font-bold text-white leading-tight m-0"
                style={{ fontSize: 'clamp(15px, 1.5vw, 19px)' }}>
              {member.name}
            </h3>
            <svg viewBox="0 0 20 20" className="w-[18px] h-[18px] flex-none" style={{ color: '#3b9eeb' }}>
              <circle cx="10" cy="10" r="10" fill="currentColor"/>
              <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <p className="text-[10px] font-bold tracking-[2.5px] uppercase mt-[6px] mb-[3px] m-0"
             style={{ color: member.color }}>
            {member.role}
          </p>
          <p className="text-[12px] text-muted m-0">{member.specialty}</p>
        </div>

        {/* divider */}
        <motion.div
          style={{ height: 1, background: member.color, originX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0.25, opacity: hovered ? 0.4 : 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* bio */}
        <motion.p
          className="text-[13px] leading-[1.72] m-0 flex-1"
          animate={{ color: hovered ? '#c8c8c8' : '#5e5e6e' }}
          transition={{ duration: 0.3 }}
        >
          {member.bio}
        </motion.p>

        {/* skill tags — stagger in accent color on hover */}
        <div className="flex flex-wrap gap-[6px]">
          {member.skills.map((skill, si) => (
            <motion.span
              key={skill}
              className="text-[10px] font-bold tracking-[1.2px] uppercase px-[10px] py-[5px] rounded-full"
              style={{ fontFamily: 'var(--font-roboto-mono), monospace', border: '1px solid transparent' }}
              animate={hovered ? {
                borderColor: member.color + '77',
                color: member.color,
                backgroundColor: member.color + '15',
                y: -2,
              } : {
                borderColor: 'rgba(255,255,255,0.09)',
                color: '#4a4a5a',
                backgroundColor: 'transparent',
                y: 0,
              }}
              transition={{ duration: 0.22, delay: hovered ? si * 0.055 : 0, ease: 'easeOut' }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-3"
             style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>

          <div className="flex items-center gap-3">
            {/* bar chart icon */}
            <motion.div
              className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              animate={{ backgroundColor: hovered ? member.color + '22' : 'rgba(255,255,255,0.04)', borderColor: hovered ? member.color + '55' : 'rgba(255,255,255,0.07)' }}
              transition={{ duration: 0.3 }}
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-[14px] h-[14px]" style={{ color: member.color }}>
                <rect x="1" y="9" width="3" height="6" rx="1" fill="currentColor" opacity="0.5"/>
                <rect x="6" y="5" width="3" height="10" rx="1" fill="currentColor" opacity="0.75"/>
                <rect x="11" y="2" width="3" height="13" rx="1" fill="currentColor"/>
              </svg>
            </motion.div>

            <motion.span
              className="text-[10px] font-bold tracking-[2px] uppercase"
              style={{ fontFamily: 'var(--font-roboto-mono), monospace' }}
              animate={{ color: hovered ? '#e0e0e0' : '#3a3a4a' }}
              transition={{ duration: 0.3 }}
            >
              View Profile
            </motion.span>
          </div>

          {/* diagonal arrow — slides on hover */}
          <motion.div
            animate={{
              x: hovered ? 3 : 0,
              y: hovered ? -3 : 0,
              opacity: hovered ? 1 : 0.25,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="w-[14px] h-[14px]"
                 style={{ color: member.color }}>
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
