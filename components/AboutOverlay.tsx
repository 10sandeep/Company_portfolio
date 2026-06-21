'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const team = [
  {
    name: 'Sushree Jyotirmayee Sahoo',
    role: 'Team Lead',
    specialty: 'Leadership, Strategy & Client Success',
    initials: 'SJS',
    photo: '/images/sushree.jpeg',
    color: '#19b3c6',
    bgFrom: '#0a1a1e',
    bgTo: '#060d10',
    bio: 'Sushree leads the team with a sharp eye for strategy and an unwavering commitment to client outcomes. She aligns every project with business goals and keeps the team moving at its best.',
    skills: ['Team Leadership', 'Strategy', 'Client Relations', 'Project Management'],
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
    role: 'Full Stack Developer',
    specialty: 'End-to-End Engineering & AI',
    initials: 'SM',
    photo: '/images/subham.png',
    color: '#C5F23C',
    bgFrom: '#141a0a',
    bgTo: '#0c0f06',
    bio: 'Subham owns the full stack — from pixel-perfect frontends to scalable APIs, cloud infrastructure, and AI integrations. He builds complete products that are fast, reliable, and ready to grow.',
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'AI/ML'],
  },
]

const PILLARS = [
  {
    num: '01',
    title: 'Strategy First',
    body: 'Every creative decision is rooted in a clear strategic brief. Beautiful work that doesn\'t solve a problem is just decoration.',
    accent: '#6C2BD9',
    icon: 'strategy',
  },
  {
    num: '02',
    title: 'Craft in Every Pixel',
    body: 'We obsess over the details others skip — typography, motion, copy tone — because the finish is what separates good from remembered.',
    accent: '#C5F23C',
    icon: 'craft',
  },
  {
    num: '03',
    title: 'Results, Always',
    body: 'We measure our work by the impact it creates for your business, not the awards it wins. Outcomes over everything.',
    accent: '#19b3c6',
    icon: 'results',
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
      style={{ background: 'var(--dark)', willChange: 'transform', scrollBehavior: 'smooth' }}
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-14 pt-6 sm:pt-10"
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

      {/* ── What makes us different ── */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-12 sm:py-16">

        {/* header */}
        <motion.div
          className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-xs font-bold tracking-[2.5px] uppercase text-purple-light mb-3">What drives us</p>
            <h2 className="font-archivo font-black text-white leading-tight m-0"
                style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
              Built different,{' '}
              <span className="bg-lime text-dark px-[0.08em] rounded-[8px] inline-block"
                    style={{ transform: 'rotate(-1.5deg)' }}>by design.</span>
            </h2>
          </div>
          <p className="text-sm text-muted max-w-[260px] leading-relaxed hidden md:block">
            Three principles that guide every project we touch.
          </p>
        </motion.div>

        {/* pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.num} pillar={p} index={i} />
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

/* ── Pillar icons ── */
function PillarIcon({ type, color }: { type: string; color: string }) {
  if (type === 'strategy') return (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <circle cx="16" cy="16" r="7" stroke={color} strokeWidth="2" opacity="0.9"/>
      <circle cx="16" cy="16" r="2.5" fill={color}/>
      <line x1="16" y1="2" x2="16" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="25" x2="16" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="16" x2="7" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="25" y1="16" x2="30" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
  if (type === 'craft') return (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <path d="M16 3 L18.5 11.5 L27 11.5 L20.5 17 L23 25.5 L16 20.5 L9 25.5 L11.5 17 L5 11.5 L13.5 11.5 Z"
            stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={color + '22'}/>
    </svg>
  )
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
      <polyline points="3,22 11,13 17,18 29,7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,7 29,7 29,14" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="27" x2="29" y2="27" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    </svg>
  )
}

/* ── Pillar card ── */
function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isLight = pillar.accent === '#C5F23C'

  return (
    <motion.div
      className="relative rounded-[24px] overflow-hidden flex flex-col cursor-default"
      style={{ background: 'var(--elevated)', border: '1px solid var(--border-2)' }}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* animated top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: pillar.accent, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* animated glow behind card on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-[24px]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ boxShadow: `0 0 40px ${pillar.accent}22`, border: `1px solid ${pillar.accent}33` }}
      />

      {/* large decorative bg number */}
      <div className="absolute bottom-4 right-5 font-archivo font-black select-none pointer-events-none"
           style={{ fontSize: 88, lineHeight: 1, color: pillar.accent, opacity: 0.06, letterSpacing: '-4px' }}>
        {pillar.num}
      </div>

      <div className="relative z-[1] p-7 flex flex-col gap-6 flex-1">

        {/* icon circle with pulse ring */}
        <div className="relative w-14 h-14 flex-none">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: pillar.accent + '15', border: `1px solid ${pillar.accent}40` }}
            animate={{ scale: hovered ? [1, 1.22, 1] : 1, opacity: hovered ? [1, 0.5, 0] : 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', repeat: hovered ? Infinity : 0 }}
          />
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{ background: pillar.accent + '18', border: `1px solid ${pillar.accent}44` }}
          >
            <PillarIcon type={pillar.icon} color={pillar.accent} />
          </div>
        </div>

        {/* number tag */}
        <span
          className="text-[10px] font-bold tracking-[2.5px] font-mono"
          style={{ color: pillar.accent, opacity: 0.7 }}
        >
          {pillar.num}
        </span>

        {/* title */}
        <motion.h3
          className="font-archivo font-black leading-tight m-0"
          style={{ fontSize: 'clamp(22px, 2.2vw, 28px)', color: '#ffffff' }}
          animate={{ color: hovered ? pillar.accent : '#ffffff' }}
          transition={{ duration: 0.35 }}
        >
          {pillar.title}
        </motion.h3>

        {/* body */}
        <p className="text-sm text-muted leading-[1.65] m-0 flex-1">
          {pillar.body}
        </p>

        {/* bottom line with animated arrow */}
        <div className="flex items-center justify-between pt-4"
             style={{ borderTop: `1px solid ${pillar.accent}22` }}>
          <motion.div
            className="h-[2px] rounded-full"
            style={{ background: pillar.accent, transformOrigin: 'left' }}
            animate={{ width: hovered ? '60%' : '24px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: pillar.accent }}>
              <line x1="4" y1="16" x2="16" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <polyline points="8,4 16,4 16,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
