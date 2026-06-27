'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ExpertiseOverlay, { type ExpertiseKey } from './ExpertiseOverlay'
import { CornerMarks } from '@/components/ui/corner-marks'
import { NumberTicker } from '@/components/ui/number-ticker'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

type CardData = {
  num: string
  title: string
  desc: string
  tags: string[]
  accent: string
  accentDark?: boolean
  expertiseKey?: ExpertiseKey
  href?: string
  icon: React.ReactNode
}

const CARDS: CardData[] = [
  {
    num: '01',
    title: 'App Development',
    desc: 'High-performance native and cross-platform mobile apps for iOS & Android that users love using every day.',
    tags: ['React Native', 'Flutter', 'iOS & Android'],
    accent: '#6C2BD9',
    expertiseKey: 'app',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <rect x="10" y="4" width="18" height="32" rx="4" fill="rgba(108,43,217,0.3)" stroke="rgba(108,43,217,0.8)" strokeWidth="1.5"/>
        <rect x="14" y="10" width="10" height="16" rx="2" fill="rgba(108,43,217,0.5)"/>
        <circle cx="19" cy="33" r="1.5" fill="rgba(108,43,217,0.9)"/>
        <rect x="30" y="12" width="14" height="24" rx="4" fill="rgba(108,43,217,0.2)" stroke="rgba(108,43,217,0.6)" strokeWidth="1.5"/>
        <rect x="33" y="17" width="8" height="14" rx="2" fill="rgba(108,43,217,0.4)"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Scalable, fast, and responsive websites and web apps built end-to-end with the best modern tech stacks.',
    tags: ['Next.js', 'React', 'TypeScript'],
    accent: '#C5F23C',
    accentDark: true,
    expertiseKey: 'web',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <rect x="4" y="8" width="40" height="28" rx="5" fill="rgba(197,242,60,0.15)" stroke="rgba(197,242,60,0.6)" strokeWidth="1.5"/>
        <rect x="4" y="8" width="40" height="10" rx="5" fill="rgba(197,242,60,0.2)"/>
        <circle cx="11" cy="13" r="2" fill="rgba(197,242,60,0.6)"/>
        <circle cx="17" cy="13" r="2" fill="rgba(197,242,60,0.4)"/>
        <rect x="10" y="24" width="14" height="3" rx="1.5" fill="rgba(197,242,60,0.5)"/>
        <rect x="10" y="30" width="22" height="2" rx="1" fill="rgba(197,242,60,0.3)"/>
        <rect x="16" y="36" width="16" height="4" rx="2" fill="rgba(197,242,60,0.2)" stroke="rgba(197,242,60,0.4)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces and seamless user experiences — from wireframes to pixel-perfect production handoff.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    accent: '#19b3c6',
    expertiseKey: 'uiux',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="rgba(25,179,198,0.12)" stroke="rgba(25,179,198,0.5)" strokeWidth="1.5"/>
        <rect x="12" y="12" width="10" height="10" rx="3" fill="rgba(25,179,198,0.4)"/>
        <rect x="26" y="12" width="10" height="4" rx="2" fill="rgba(25,179,198,0.3)"/>
        <rect x="26" y="19" width="7" height="3" rx="1.5" fill="rgba(25,179,198,0.2)"/>
        <rect x="12" y="28" width="24" height="3" rx="1.5" fill="rgba(25,179,198,0.35)"/>
        <rect x="12" y="34" width="18" height="3" rx="1.5" fill="rgba(25,179,198,0.2)"/>
        <circle cx="34" cy="34" r="5" fill="rgba(25,179,198,0.6)" stroke="rgba(25,179,198,0.9)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'AI & Automation',
    desc: 'Smart automation, AI integrations, and ML-powered features that give your product an intelligent edge.',
    tags: ['ChatGPT API', 'ML Models', 'Automation'],
    accent: '#a855f7',
    href: '/services#ai',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="8" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.7)" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="3" fill="rgba(168,85,247,0.8)"/>
        <circle cx="10" cy="14" r="3.5" fill="rgba(168,85,247,0.3)" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
        <circle cx="38" cy="14" r="3.5" fill="rgba(168,85,247,0.3)" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
        <circle cx="10" cy="34" r="3.5" fill="rgba(168,85,247,0.3)" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
        <circle cx="38" cy="34" r="3.5" fill="rgba(168,85,247,0.3)" stroke="rgba(168,85,247,0.6)" strokeWidth="1"/>
        <line x1="13" y1="16" x2="18" y2="19" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
        <line x1="35" y1="16" x2="30" y2="19" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
        <line x1="13" y1="32" x2="18" y2="29" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
        <line x1="35" y1="32" x2="30" y2="29" stroke="rgba(168,85,247,0.4)" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function Expertise() {
  const [openKey, setOpenKey] = useState<ExpertiseKey | null>(null)

  return (
    <>
      <section
        id="about"
        className="mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] overflow-hidden"
        style={{
          background: 'var(--panel)',
          padding: 'clamp(32px,5vw,56px) clamp(18px,4vw,56px)',
          scrollMarginTop: '80px',
        }}
      >
        <div className="max-w-[1120px] mx-auto">

          {/* section header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div>
              <p className="text-[11px] font-black tracking-[3px] uppercase mb-3" style={{ color: 'var(--purple-light)' }}>
                What We Do
              </p>
              <h2
                className="font-archivo font-black m-0 tracking-tight text-white leading-[1.05]"
                style={{ fontSize: 'clamp(26px,3.6vw,42px)' }}
              >
                Our Expertise
              </h2>
            </div>
            <p className="max-w-[320px] text-sm text-muted m-0 leading-relaxed sm:text-right">
              We turn ideas into reality by combining creativity, strategy, and technical excellence.
            </p>
          </motion.div>

          {/* divider */}
          <motion.div
            className="h-px bg-white/[0.08] mb-8"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          />

          {/* 4-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {CARDS.map((card, i) => (
              <ExpertiseCard
                key={card.num}
                card={card}
                index={i}
                onOpen={card.expertiseKey ? () => setOpenKey(card.expertiseKey!) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {openKey && (
        <ExpertiseOverlay expertiseKey={openKey} onClose={() => setOpenKey(null)} />
      )}
    </>
  )
}

function ExpertiseCard({
  card,
  index,
  onOpen,
}: {
  card: CardData
  index: number
  onOpen?: () => void
}) {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <motion.div
      className="group relative rounded-[22px] p-7 flex flex-col gap-5 overflow-hidden cursor-pointer h-full"
      style={{ background: 'var(--elevated)' }}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* accent top bar — animates width on hover */}
      <div
        className="absolute top-0 left-0 h-[3px] rounded-t-[22px] transition-all duration-500"
        style={{ width: hovered ? '100%' : '0%', background: card.accent }}
      />

      {/* shimmer overlay */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 0%, ${card.accent}18 0%, transparent 70%)`,
            borderRadius: '22px',
          }}
        />
      )}

      {/* top row: number + icon */}
      <div className="flex items-start justify-between">
        <span
          className="font-archivo font-black leading-none select-none"
          style={{ fontSize: '13px', color: 'var(--num-ghost)', letterSpacing: '1px' }}
        >
          <NumberTicker value={index + 1} padStart={2} delay={index * 60} once={false} />
        </span>
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {card.icon}
        </motion.div>
      </div>

      {/* text content */}
      <div className="flex flex-col gap-3 flex-1">
        <h3
          className="font-archivo font-bold text-white m-0 leading-[1.15]"
          style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}
        >
          {card.title}
        </h3>
        <p className="text-sm text-muted m-0 leading-[1.65]">{card.desc}</p>
      </div>

      {/* tag pills */}
      <div className="flex flex-wrap gap-[7px] mt-auto">
        {card.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] font-semibold px-3 py-[5px] rounded-full"
            style={{
              background: card.accent + '18',
              color: card.accent === '#C5F23C' ? '#b5df30' : card.accent,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* arrow indicator */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
          {onOpen ? 'Click to explore' : 'Learn more'}
        </span>
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: hovered ? card.accent : 'var(--border)' }}
          animate={{ background: hovered ? card.accent : 'var(--border)' }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={hovered && card.accentDark ? '#0b0b0b' : '#fff'}
               strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]"
               style={{ transform: 'rotate(-45deg)' }}>
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="13 6 19 12 13 18"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )

  if (card.href) {
    return (
      <div className="relative h-full">
        <CornerMarks hovered={hovered} />
        <Link href={card.href} className="no-underline block h-full">
          {inner}
        </Link>
      </div>
    )
  }

  return (
    <div onClick={onOpen} className="relative h-full">
      <CornerMarks hovered={hovered} />
      {inner}
    </div>
  )
}
