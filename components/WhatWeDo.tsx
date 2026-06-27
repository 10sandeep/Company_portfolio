'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NumberTicker } from '@/components/ui/number-ticker'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function fu(delay = 0, fromLeft = true) {
  return {
    initial:    { opacity: 0, x: fromLeft ? -48 : 48 },
    whileInView: { opacity: 1, x: 0 },
    viewport:   { once: false, amount: 0.2 } as const,
    transition: { duration: 0.75, delay, ease: EASE },
  }
}

const SECTIONS = [
  {
    num: '01',
    label: 'Web & App Development',
    title: 'From Idea to\nShipped Product',
    desc: 'We take your concept and turn it into a production-ready product — Next.js, React Native, TypeScript, clean architecture. Built to scale from day one.',
    href: '/services#web',
    cta: 'Explore Web Services',
    accent: '#6C2BD9',
    visual: <WebVisual />,
  },
  {
    num: '02',
    label: 'Mobile-First',
    title: 'Apps Your Users\nWill Actually Use',
    desc: 'We design and build mobile experiences that feel native and fast. Whether iOS, Android, or cross-platform — your users get something they love opening.',
    href: '/services#mobile',
    cta: 'Explore Mobile Services',
    accent: '#f97316',
    visual: <MobileVisual />,
  },
  {
    num: '03',
    label: 'UI/UX Design',
    title: 'Design That Converts\nAnd Delights',
    desc: 'Great design is not just visual — it\'s the difference between a product people tolerate and one they recommend. We design systems that scale.',
    href: '/services#design',
    cta: 'Explore Design Services',
    accent: '#16a34a',
    visual: <DesignVisual />,
  },
  {
    num: '04',
    label: 'AI & Automation',
    title: 'Make Your Product\nWork Smarter',
    desc: 'We integrate AI, automate workflows, and add ML-powered features that save your users time and make your product feel effortlessly intelligent.',
    href: '/services#ai',
    cta: 'Explore AI Services',
    accent: '#a855f7',
    visual: <AIVisual />,
  },
]

export default function WhatWeDo() {
  return (
    <section style={{ background: '#ffffff' }} className="overflow-hidden">
    <div className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-24">

      {/* section header */}
      <motion.div
        className="mb-14 sm:mb-20"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <p className="text-[11px] font-black tracking-[3px] uppercase mb-4" style={{ color: '#7c3aed' }}>
          What We Can Do
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="font-archivo font-black m-0 leading-[1.05]"
            style={{ fontSize: 'clamp(26px, 4vw, 50px)', color: '#0b0b0b' }}
          >
            Full-stack capability.<br />Zero compromise.
          </h2>
          <p
            className="text-sm leading-[1.7] m-0 sm:max-w-[300px] sm:text-right"
            style={{ color: '#6b7280' }}
          >
            Everything you need to go from idea to live product — one studio, end to end.
          </p>
        </div>
      </motion.div>

      {/* alternating sections */}
      <div className="flex flex-col gap-10 sm:gap-16 lg:gap-24">
        {SECTIONS.map((s, i) => {
          const isEven = i % 2 === 0
          return (
            <div
              key={s.num}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
            >
              {/* text side */}
              <motion.div className="flex-1 min-w-0" {...fu(0, isEven)}>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-archivo font-black leading-none"
                    style={{ fontSize: '13px', color: s.accent, letterSpacing: '1px' }}
                  >
                    <NumberTicker value={i + 1} padStart={2} delay={i * 60} once={false} />
                  </span>
                  <div className="h-px flex-1" style={{ background: s.accent + '40' }} />
                  <span
                    className="text-[11px] font-bold tracking-[2px] uppercase"
                    style={{ color: s.accent + 'cc' }}
                  >
                    {s.label}
                  </span>
                </div>

                <h3
                  className="font-archivo font-black m-0 mb-5 leading-[1.1]"
                  style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', color: '#0b0b0b' }}
                >
                  {s.title.split('\n').map((line, j) => (
                    <span key={j}>
                      {j > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>

                <p
                  className="text-[15px] sm:text-[16px] leading-[1.75] m-0 mb-8 max-w-[460px]"
                  style={{ color: '#6b7280' }}
                >
                  {s.desc}
                </p>

                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 font-semibold text-sm no-underline group/cta"
                  style={{ color: s.accent }}
                >
                  {s.cta}
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="w-[14px] h-[14px] transition-transform duration-300 group-hover/cta:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="13 6 19 12 13 18"/>
                  </svg>
                </Link>
              </motion.div>

              {/* visual side */}
              <motion.div
                className="w-full lg:flex-none lg:w-[440px] xl:w-[480px]"
                {...fu(0.08, !isEven)}
              >
                <div
                  className="relative rounded-[28px] overflow-hidden"
                  style={{
                    background: '#16161f',
                    aspectRatio: '4/3',
                  }}
                >
                  {/* accent glow top */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${s.accent}22 0%, transparent 65%)`,
                    }}
                  />
                  {/* visual content */}
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    {s.visual}
                  </div>
                  {/* accent corner badge */}
                  <div
                    className="absolute top-4 right-4 font-archivo font-black text-[11px] tracking-[1px] px-3 py-[5px] rounded-full"
                    style={{ background: s.accent + '25', color: s.accent }}
                  >
                    {s.num}
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
    </section>
  )
}

/* ── Section visuals ── */

function WebVisual() {
  return (
    <svg viewBox="0 0 360 240" fill="none" className="w-full h-full" style={{ maxHeight: '220px' }}>
      {/* browser frame */}
      <rect x="20" y="20" width="320" height="200" rx="10" fill="rgba(108,43,217,0.1)" stroke="rgba(108,43,217,0.3)" strokeWidth="1.5"/>
      <rect x="20" y="20" width="320" height="32" rx="10" fill="rgba(108,43,217,0.2)"/>
      <rect x="20" y="40" width="320" height="12" fill="rgba(108,43,217,0.2)"/>
      {/* dots */}
      <circle cx="36" cy="36" r="5" fill="rgba(255,255,255,0.25)"/>
      <circle cx="50" cy="36" r="5" fill="rgba(255,255,255,0.25)"/>
      <circle cx="64" cy="36" r="5" fill="rgba(255,255,255,0.25)"/>
      {/* address bar */}
      <rect x="80" y="28" width="200" height="16" rx="8" fill="rgba(255,255,255,0.08)"/>
      <rect x="88" y="33" width="80" height="6" rx="3" fill="rgba(108,43,217,0.6)" style={{ animation: 'exp-pulse 2.5s ease-in-out infinite' }}/>
      {/* content */}
      <rect x="36" y="64" width="80" height="8" rx="4" fill="rgba(255,255,255,0.5)" style={{ animation: 'exp-pulse 2s ease-in-out infinite' }}/>
      <rect x="36" y="78" width="130" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" style={{ animation: 'exp-pulse 2s ease-in-out 0.2s infinite' }}/>
      <rect x="36" y="88" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.4s infinite' }}/>
      {/* card blocks */}
      <rect x="36" y="106" width="80" height="60" rx="8" fill="rgba(108,43,217,0.25)" style={{ animation: 'exp-glow 3s ease-in-out infinite' }}/>
      <rect x="124" y="106" width="80" height="60" rx="8" fill="rgba(108,43,217,0.15)"/>
      <rect x="212" y="106" width="80" height="60" rx="8" fill="rgba(108,43,217,0.1)"/>
      <rect x="36" y="172" width="130" height="28" rx="14" fill="rgba(197,242,60,0.8)"/>
      <rect x="52" y="182" width="80" height="8" rx="4" fill="rgba(0,0,0,0.3)"/>
      {/* cursor */}
      <rect x="174" y="172" width="2" height="14" rx="1" fill="rgba(255,255,255,0.6)" style={{ animation: 'exp-blink 1s step-end infinite' }}/>
    </svg>
  )
}

function MobileVisual() {
  return (
    <svg viewBox="0 0 360 240" fill="none" className="w-full h-full" style={{ maxHeight: '220px' }}>
      {/* phone 1 */}
      <g style={{ animation: 'exp-float 3.5s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: '110px 120px' }}>
        <rect x="60" y="20" width="100" height="180" rx="16" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5"/>
        <rect x="68" y="36" width="84" height="140" rx="8" fill="rgba(249,115,22,0.2)"/>
        <rect x="75" y="45" width="70" height="16" rx="8" fill="rgba(249,115,22,0.5)"/>
        <rect x="75" y="67" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.4)"/>
        <rect x="75" y="76" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.25)"/>
        <rect x="75" y="90" width="70" height="46" rx="6" fill="rgba(249,115,22,0.3)"/>
        <rect x="75" y="142" width="70" height="18" rx="9" fill="rgba(249,115,22,0.6)"/>
        <circle cx="110" cy="195" r="6" fill="rgba(249,115,22,0.4)"/>
      </g>
      {/* phone 2 */}
      <g style={{ animation: 'exp-float 3.5s ease-in-out 1s infinite', transformBox: 'fill-box', transformOrigin: '250px 120px' }}>
        <rect x="200" y="30" width="100" height="175" rx="16" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5"/>
        <rect x="208" y="46" width="84" height="136" rx="8" fill="rgba(249,115,22,0.15)"/>
        <rect x="215" y="55" width="70" height="12" rx="6" fill="rgba(249,115,22,0.4)"/>
        <rect x="215" y="73" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.35)"/>
        <rect x="215" y="82" width="60" height="40" rx="6" fill="rgba(249,115,22,0.25)"/>
        <rect x="215" y="127" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
        <rect x="215" y="136" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.15)"/>
        <rect x="215" y="150" width="70" height="16" rx="8" fill="rgba(249,115,22,0.5)"/>
        <circle cx="250" cy="190" r="6" fill="rgba(249,115,22,0.35)"/>
      </g>
      {/* connecting arc */}
      <path d="M 160 120 Q 180 80 200 120" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
      <circle cx="180" cy="90" r="4" fill="rgba(249,115,22,0.6)" style={{ animation: 'exp-signal 1.5s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
    </svg>
  )
}

function DesignVisual() {
  return (
    <svg viewBox="0 0 360 240" fill="none" className="w-full h-full" style={{ maxHeight: '220px' }}>
      {/* canvas */}
      <rect x="20" y="20" width="220" height="200" rx="10" fill="rgba(197,242,60,0.06)" stroke="rgba(197,242,60,0.2)" strokeWidth="1.5"/>
      {/* grid guides */}
      <line x1="20" y1="120" x2="240" y2="120" stroke="rgba(197,242,60,0.12)" strokeWidth="1" strokeDasharray="4 4"/>
      <line x1="130" y1="20" x2="130" y2="220" stroke="rgba(197,242,60,0.12)" strokeWidth="1" strokeDasharray="4 4"/>
      {/* color swatches on right */}
      <rect x="255" y="20" width="85" height="200" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(197,242,60,0.15)" strokeWidth="1"/>
      <rect x="265" y="32" width="65" height="28" rx="6" fill="#6C2BD9"/>
      <rect x="265" y="66" width="65" height="28" rx="6" fill="#C5F23C"/>
      <rect x="265" y="100" width="65" height="28" rx="6" fill="rgba(197,242,60,0.2)" stroke="rgba(197,242,60,0.4)" strokeWidth="1"/>
      <rect x="265" y="140" width="28" height="10" rx="5" fill="rgba(255,255,255,0.5)"/>
      <rect x="265" y="156" width="65" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="265" y="164" width="50" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="265" y="178" width="65" height="28" rx="6" fill="rgba(197,242,60,0.1)" stroke="rgba(197,242,60,0.3)" strokeWidth="1"/>
      <rect x="272" y="188" width="40" height="8" rx="4" fill="rgba(197,242,60,0.6)"/>
      {/* canvas components */}
      <rect x="36" y="36" width="88" height="60" rx="8" fill="rgba(197,242,60,0.15)" stroke="rgba(197,242,60,0.3)" strokeWidth="1" style={{ animation: 'exp-glow 2.5s ease-in-out infinite' }}/>
      <rect x="44" y="46" width="72" height="8" rx="4" fill="rgba(197,242,60,0.5)"/>
      <rect x="44" y="58" width="50" height="5" rx="2.5" fill="rgba(255,255,255,0.35)"/>
      <rect x="44" y="67" width="60" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="140" y="36" width="84" height="60" rx="8" fill="rgba(197,242,60,0.08)" stroke="rgba(197,242,60,0.2)" strokeWidth="1"/>
      <rect x="36" y="106" width="188" height="50" rx="8" fill="rgba(197,242,60,0.08)" stroke="rgba(197,242,60,0.15)" strokeWidth="1"/>
      <rect x="46" y="116" width="80" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="46" y="127" width="120" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="36" y="164" width="90" height="40" rx="8" fill="rgba(108,43,217,0.3)"/>
      <rect x="134" y="164" width="90" height="40" rx="8" fill="rgba(197,242,60,0.12)" stroke="rgba(197,242,60,0.2)" strokeWidth="1"/>
      {/* cursor */}
      <g style={{ animation: 'exp-float 2s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
        <path d="M152 90 L152 110 L157 105 L161 114 L163 113 L159 104 L166 104 Z" fill="white" stroke="rgba(0,0,0,0.5)" strokeWidth="0.8"/>
      </g>
    </svg>
  )
}

function AIVisual() {
  return (
    <svg viewBox="0 0 360 240" fill="none" className="w-full h-full" style={{ maxHeight: '220px' }}>
      {/* central brain/node */}
      <circle cx="180" cy="120" r="32" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" strokeWidth="2"/>
      <circle cx="180" cy="120" r="20" fill="rgba(168,85,247,0.35)" stroke="rgba(168,85,247,0.7)" strokeWidth="1.5" style={{ animation: 'exp-glow 2s ease-in-out infinite' }}/>
      <circle cx="180" cy="120" r="8" fill="rgba(168,85,247,0.9)"/>
      {/* outer nodes */}
      {[
        { cx: 60,  cy: 60,  delay: '0s'   },
        { cx: 300, cy: 60,  delay: '0.25s' },
        { cx: 60,  cy: 180, delay: '0.5s'  },
        { cx: 300, cy: 180, delay: '0.75s' },
        { cx: 100, cy: 120, delay: '1s'    },
        { cx: 260, cy: 120, delay: '1.25s' },
        { cx: 180, cy: 48,  delay: '1.5s'  },
        { cx: 180, cy: 192, delay: '1.75s' },
      ].map((n, i) => (
        <g key={i}>
          <line
            x1={n.cx} y1={n.cy} x2="180" y2="120"
            stroke="rgba(168,85,247,0.25)" strokeWidth="1.5" strokeDasharray="5 4"
          />
          <circle
            cx={n.cx} cy={n.cy} r="10"
            fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"
            style={{ animation: `exp-signal 2s ease-in-out ${n.delay} infinite`, transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <circle cx={n.cx} cy={n.cy} r="4" fill="rgba(168,85,247,0.7)"/>
        </g>
      ))}
      {/* travelling data packets */}
      <circle r="3" fill="#C5F23C" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M60,60 L180,120"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle r="3" fill="#C5F23C" opacity="0.9">
        <animateMotion dur="3s" repeatCount="indefinite" begin="0.8s" path="M300,60 L180,120"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle r="3" fill="#C5F23C" opacity="0.9">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" path="M180,120 L300,180"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}
