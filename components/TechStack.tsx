'use client'
import { motion } from 'framer-motion'

interface Tech { name: string; color: string; logo: React.ReactNode }

const ROW1: Tech[] = [
  {
    name: 'React', color: '#61DAFB',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'Next.js', color: '#e2e2e2',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
        <path d="M4 20V4l11.5 16V4"/>
        <line x1="4" y1="4" x2="4" y2="20"/>
        <line x1="20" y1="4" x2="20" y2="14"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript', color: '#3B82F6',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.2"/>
        <text x="4" y="16.5" fontSize="9.5" fontWeight="bold" fontFamily="monospace" fill="currentColor">TS</text>
      </svg>
    ),
  },
  {
    name: 'Node.js', color: '#4ADE80',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L21.5 7.5v9L12 22 2.5 16.5v-9L12 2z"/>
        <text x="8.5" y="15.5" fontSize="8" fontWeight="bold" fontFamily="monospace" fill="currentColor" stroke="none">N</text>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS', color: '#22D3EE',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M6 10c.8-3.2 2.8-4.8 6-4.8 4.8 0 5.4 3.6 7.8 4.2-1.6 2.4-3.6 3.3-6 2.4C11.6 11.1 9.8 10 6 10z" fill="currentColor" opacity="0.9"/>
        <path d="M2 16.2c.8-3.2 2.8-4.8 6-4.8 4.8 0 5.4 3.6 7.8 4.2-1.6 2.4-3.6 3.3-6 2.4-2.2-.8-4-1.8-7.8-1.8z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Flutter', color: '#67E8F9',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.5 3L4 12.5l3.2 3.2 9.8-9.8L13.5 3z" opacity="0.7"/>
        <path d="M13.5 11.3l-4.3 4.3 4.3 4.3 3.5-3.5-4.3-4.3.8-.8-3.5 3.5 3.5-3.5z" opacity="0.9"/>
        <path d="M13.5 19.9l-2.8-2.8 1.5-1.5 4.3 4.3h-3z" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL', color: '#818CF8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <ellipse cx="12" cy="6" rx="8" ry="3"/>
        <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
        <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB', color: '#4ADE80',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C9.5 5 7 8.5 7 12c0 2.76 1.56 5.17 3.84 6.4L12 22l1.16-3.6A7 7 0 0017 12c0-3.5-2.5-7-5-10z" opacity="0.9"/>
        <path d="M11.5 19.5v-10" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
]

const ROW2: Tech[] = [
  {
    name: 'AWS', color: '#FB923C',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 15.5C3 15 2 13.6 2 12c0-2.2 1.8-4 4-4 .28 0 .55.03.81.08A5.5 5.5 0 0117.5 9.5c.17-.02.33-.02.5 0a4 4 0 010 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 16l3-3 3 3M12 13v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Figma', color: '#A78BFA',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="5" y="2" width="7" height="7" rx="3.5" fill="currentColor" opacity="0.6"/>
        <rect x="12" y="2" width="7" height="7" rx="3.5" fill="currentColor" opacity="0.9"/>
        <rect x="5" y="9" width="7" height="7" rx="3.5" fill="currentColor" opacity="0.75"/>
        <rect x="5" y="16" width="7" height="7" rx="3.5" fill="currentColor" opacity="0.5"/>
        <circle cx="15.5" cy="12.5" r="3.5" fill="currentColor" opacity="1"/>
      </svg>
    ),
  },
  {
    name: 'Python', color: '#60A5FA',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2c-3 0-5 1.5-5 3.5V9h5v1H5.5C3.5 10 2 11.5 2 14s1.5 4 3.5 4H7v-2.5c0-2 2-3.5 5-3.5s5 1.5 5 3.5V18h1.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17V9h5V5.5C22 3.5 20 2 17 2h-5z"/>
        <circle cx="8.5" cy="6" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15.5" cy="18" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Firebase', color: '#FBBF24',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M5 20L8.5 3.5 12.5 11 15 7l4 13H5z" opacity="0.7"/>
        <path d="M5 20L8.5 10l4 1.5L5 20z" opacity="1"/>
        <path d="M15 7l4 13H5l9.5-8.5L15 7z" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Vercel', color: '#e2e2e2',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3L22 20H2L12 3z"/>
      </svg>
    ),
  },
  {
    name: 'GraphQL', color: '#F472B6',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <circle cx="12" cy="3"  r="2" opacity="0.9"/>
        <circle cx="21" cy="8"  r="2" opacity="0.9"/>
        <circle cx="21" cy="16" r="2" opacity="0.9"/>
        <circle cx="12" cy="21" r="2" opacity="0.9"/>
        <circle cx="3"  cy="16" r="2" opacity="0.9"/>
        <circle cx="3"  cy="8"  r="2" opacity="0.9"/>
        <circle cx="12" cy="12" r="2.5"/>
        <path d="M12 5L19.5 9.5M21 10v4M19.5 14.5L12 19M12 19L4.5 14.5M3 14v-4M4.5 9.5L12 5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Docker', color: '#38BDF8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="11" width="4" height="3.5" rx="0.5"/>
        <rect x="7" y="11" width="4" height="3.5" rx="0.5"/>
        <rect x="12" y="11" width="4" height="3.5" rx="0.5"/>
        <rect x="7"  y="7"  width="4" height="3.5" rx="0.5"/>
        <rect x="12" y="7"  width="4" height="3.5" rx="0.5"/>
        <rect x="12" y="3"  width="4" height="3.5" rx="0.5"/>
        <path d="M18 13s1 0 2-1c1.5-1.5 1-4 1-4s-2.5-1-4 1" strokeLinecap="round"/>
        <path d="M2 14.5s0 3 3 3h13c2 0 3-1.5 3-3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Git', color: '#F87171',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5">
        <circle cx="6"  cy="18" r="2.5"/>
        <circle cx="18" cy="6"  r="2.5"/>
        <circle cx="6"  cy="6"  r="2.5"/>
        <path d="M6 15.5V8.5"/>
        <path d="M6 8.5 Q6 6 8.5 6 H15.5"/>
      </svg>
    ),
  },
]

/* triple each row so one copy always covers any viewport width */
const D1 = [...ROW1, ...ROW1, ...ROW1]
const D2 = [...ROW2, ...ROW2, ...ROW2]

export default function TechStack() {
  return (
    <section className="py-10 overflow-hidden">
      {/* section label */}
      <motion.div
        className="flex items-center gap-4 max-w-[1180px] mx-auto px-5 sm:px-7 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-muted whitespace-nowrap">
          Tech Stack We Use
        </span>
        <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
      </motion.div>

      {/* ── Row 1 – scrolls left ── */}
      <div
        className="ts-row relative mb-4"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="ts-track-left flex gap-4 w-max pr-4">
          {D1.map((tech, i) => (
            <Pill key={i} tech={tech} />
          ))}
        </div>
      </div>

      {/* ── Row 2 – scrolls right ── */}
      <div
        className="ts-row relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="ts-track-right flex gap-4 w-max pr-4">
          {D2.map((tech, i) => (
            <Pill key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Pill({ tech }: { tech: Tech }) {
  return (
    <div
      className="flex items-center gap-[10px] px-5 py-[11px] rounded-[14px] whitespace-nowrap select-none
                 transition-all duration-300 cursor-default"
      style={{
        background: tech.color + '16',
        color: tech.color,
      }}
    >
      {tech.logo}
      <span
        className="text-[13px] font-bold tracking-wide"
        style={{ fontFamily: 'var(--font-roboto-mono), monospace' }}
      >
        {tech.name}
      </span>
    </div>
  )
}
