'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { CornerMarks } from '@/components/ui/corner-marks'

/* ─── Anchor nav ─── */
const ANCHORS = [
  { label: '01 · Web Development',   href: '#web' },
  { label: '02 · Mobile Apps',       href: '#mobile' },
  { label: '03 · UI/UX Design',      href: '#design' },
  { label: '04 · Backend & Cloud',   href: '#backend' },
  { label: '05 · AI & Automation',   href: '#ai' },
  { label: '06 · How We Work',       href: '#process' },
]

/* ─── Stats ─── */
const HERO_STATS = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '5+',   label: 'Years of Experience' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '12+',  label: 'Happy Clients' },
]

/* ─── Section data ─── */
const WEB_CARDS = [
  {
    num: '01', title: 'Business Websites',
    desc: 'Professional web presence built to convert visitors into clients — fast, accessible, and easy to manage.',
    bullets: ['Custom design from scratch', 'SEO-optimised architecture', 'CMS & blog integration', 'Analytics & cookie consent'],
  },
  {
    num: '02', title: 'SaaS Platforms',
    desc: 'End-to-end web applications for startups — from MVP prototype to full-scale multi-tenant production.',
    bullets: ['Multi-tenant architecture', 'Subscription & billing flows', 'Admin & analytics dashboard', 'API-first design'],
  },
  {
    num: '03', title: 'Web Dashboards',
    desc: 'Internal tools and data dashboards that give your team real-time visibility and full operational control.',
    bullets: ['Data visualisation charts', 'Role-based access control', 'Live data & WebSockets', 'PDF export & reporting'],
  },
  {
    num: '04', title: 'Landing Pages',
    desc: 'Conversion-focused pages built around your product story — designed for speed and maximum lead capture.',
    bullets: ['Above-the-fold optimisation', 'A/B testing compatible', 'Form & CRM integration', 'Sub-2 second load time'],
  },
]

const MOBILE_STATS = [
  { value: '14 days',    label: 'Concept to prototype' },
  { value: 'iOS + Android', label: 'Both platforms covered' },
  { value: '4.8 ★',     label: 'Average app store rating' },
]

const MOBILE_CARDS = [
  {
    num: '01', title: 'iOS Applications',
    desc: 'Native Swift apps crafted for the Apple ecosystem — smooth, performant, and App Store ready from day one.',
    bullets: ['SwiftUI & UIKit', 'Apple Pay & StoreKit', 'Push notifications', 'TestFlight beta delivery'],
  },
  {
    num: '02', title: 'Android Applications',
    desc: 'Kotlin-powered apps that feel native on every device — from budget phones to flagship tablets.',
    bullets: ['Jetpack Compose', 'Google Pay integration', 'Offline-first architecture', 'Play Store submission'],
  },
  {
    num: '03', title: 'Cross-Platform Apps',
    desc: 'One codebase, two platforms — React Native apps that look and feel native on both iOS and Android.',
    bullets: ['React Native & Expo', 'Shared business logic', 'Native module bridges', '60fps UI animations'],
  },
  {
    num: '04', title: 'Progressive Web Apps',
    desc: 'Web apps that install like native apps — offline-capable and available on any device, no app store required.',
    bullets: ['Service worker caching', 'Home screen install', 'Background sync', 'App-like navigation'],
  },
]

const DESIGN_CARDS = [
  {
    num: '01', title: 'Product Design',
    desc: 'Full product design from user research through to handoff — every screen crafted with purpose and precision.',
    bullets: ['User research & personas', 'Information architecture', 'Hi-fi UI in Figma', 'Dev-ready spec handoff'],
  },
  {
    num: '02', title: 'Brand Identity',
    desc: 'Visual identities that tell your story at a glance — logo, colour system, type, and brand guidelines.',
    bullets: ['Logo & icon design', 'Colour & type system', 'Brand guidelines PDF', 'Social media asset kit'],
  },
  {
    num: '03', title: 'Design Systems',
    desc: 'Scalable component libraries that keep your product consistent as it grows — in Figma or code.',
    bullets: ['Component library', 'Token-based theming', 'Figma variables & auto-layout', 'Storybook-ready output'],
  },
  {
    num: '04', title: 'Prototyping & UX Research',
    desc: 'Clickable prototypes and real user testing so you validate ideas before writing a single line of code.',
    bullets: ['Interactive prototypes', 'Usability test sessions', 'Heatmap & session analysis', 'Iteration rounds included'],
  },
]

const BACKEND_STATS = [
  { value: '99.9%',  label: 'Uptime SLA target' },
  { value: '<150ms', label: 'Median API latency' },
  { value: 'SOC2',   label: 'Security-ready patterns' },
]

const BACKEND_FEATURES = [
  { title: 'REST & GraphQL APIs',  desc: 'Type-safe, versioned, documented APIs that power your frontend, mobile apps, and partner integrations.' },
  { title: 'Database Design',      desc: 'PostgreSQL, MongoDB, Redis — the right engine for each workload, with migrations and automated backups.' },
  { title: 'Auth & Security',      desc: 'JWT, OAuth2, SSO, MFA — enterprise-grade identity and access management without the enterprise overhead.' },
  { title: 'Cloud & DevOps',       desc: 'Docker, Kubernetes, GitHub Actions, AWS & GCP — zero-downtime CI/CD pipelines as a first-class citizen.' },
  { title: 'Real-Time Systems',    desc: 'WebSockets, SSE, and live sync for chat apps, notification feeds, and live analytics dashboards.' },
  { title: 'Payments & Billing',   desc: 'Stripe, Razorpay, and PayPal integrations with subscription management and auto-invoicing built in.' },
]

const AI_CARDS = [
  {
    num: '01', title: 'AI Chatbots & Assistants',
    desc: 'Custom LLM-powered assistants trained on your content — for support, onboarding, and internal Q&A at scale.',
    bullets: ['GPT-4o & Claude 3.5 Sonnet', 'Custom knowledge base (RAG)', 'Multi-channel deployment', 'Usage analytics dashboard'],
  },
  {
    num: '02', title: 'ML Integration',
    desc: 'Add intelligence to existing products — recommendation engines, content classification, and predictive analytics.',
    bullets: ['Model selection & fine-tuning', 'Prediction API wrapper', 'A/B model experimentation', 'Continuous retraining pipeline'],
  },
  {
    num: '03', title: 'Data Pipelines',
    desc: 'Automated data ingestion, transformation, and warehousing — feeding your dashboards and AI models reliably.',
    bullets: ['ETL / ELT architecture', 'Real-time streaming (Kafka)', 'Data warehouse setup', 'Monitoring & alerting'],
  },
  {
    num: '04', title: 'Workflow Automation',
    desc: 'Eliminate repetitive manual work with smart, reliable automation across your tools and internal systems.',
    bullets: ['No-code + code hybrid flows', 'Third-party API integrations', 'Scheduled & event-driven jobs', 'Error handling & retry logic'],
  },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery',    desc: 'Deep-dive into your goals, users, and constraints. A thorough brief now prevents weeks of expensive rework later.' },
  { num: '02', title: 'Strategy',     desc: 'We define scope, tech stack, timeline, and milestones — a shared plan every stakeholder can commit to.' },
  { num: '03', title: 'Design',       desc: 'Wireframes, clickable prototypes, and polished UI — validated with real users before a line of code is written.' },
  { num: '04', title: 'Development',  desc: 'Clean, tested code shipped in two-week sprints with live demos and structured feedback loops built in.' },
  { num: '05', title: 'QA & Launch',  desc: 'Rigorous cross-device and cross-browser testing, then a smooth, zero-downtime production release.' },
  { num: '06', title: 'Post-Launch',  desc: 'Monitoring, rapid bug fixes, and iterative improvements — we stay with you long after go-live.' },
]

/* ─── Shared animation helper ─── */
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function fu(delay = 0) {
  return {
    initial:     { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0  },
    viewport:    { once: true, amount: 0.12 },
    transition:  { duration: 0.7, delay, ease: EASE },
  }
}

function fl(delay = 0) {
  return {
    initial:     { opacity: 0, x: -32 },
    whileInView: { opacity: 1, x: 0   },
    viewport:    { once: true, amount: 0.2 },
    transition:  { duration: 0.6, delay, ease: EASE },
  }
}

/* ─── Sub-components ─── */
function SectionTag({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <span className="text-xs font-black tracking-[3px] uppercase" style={{ color: '#b99dff' }}>{num}</span>
      <motion.span
        className="h-px flex-none"
        style={{ background: '#b99dff' }}
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
      />
      <span className="text-xs font-black tracking-[2.5px] uppercase" style={{ color: '#b99dff' }}>{label}</span>
    </motion.div>
  )
}

function ServiceCard({ card, accent, index }: { card: typeof WEB_CARDS[0]; accent: string; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isLime = accent === '#C5F23C'

  return (
    <div className="relative">
      <CornerMarks hovered={hovered} />
    <motion.div
      {...fu(index * 0.07)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
      animate={{
        y: hovered ? -6 : 0,
        boxShadow: hovered ? `0 24px 56px rgba(0,0,0,0.45)` : 'none',
      }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{ background: 'var(--card)' }}
    >
      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${accent}, ${isLime ? '#6C2BD9' : accent}88)`, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />

      {/* shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `linear-gradient(105deg, transparent 35%, ${accent}14 50%, transparent 65%)` }}
        animate={{ x: hovered ? '120%' : '-120%' }}
        transition={{ duration: 0.55, ease: 'easeInOut' }}
      />

      {/* radial glow tint */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(ellipse at top left, ${accent}12 0%, transparent 65%)` }}
      />

      <div className="relative z-[1] p-6 sm:p-7 flex flex-col gap-4 h-full">
        {/* top row: badge + arrow */}
        <div className="flex items-center justify-between">
          <motion.span
            className="text-[10px] font-black tracking-[2.5px] uppercase px-[10px] py-[5px] rounded-lg"
            animate={{
              background: hovered ? accent + '28' : 'rgba(255,255,255,0.07)',
              color: hovered ? (isLime ? '#0b0b0b' : accent) : '#b99dff',
            }}
            transition={{ duration: 0.25 }}
          >
            {card.num}
          </motion.span>

          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-none"
            animate={{
              background: hovered ? accent + '22' : 'rgba(255,255,255,0.06)',
              x: hovered ? 3 : 0,
              y: hovered ? -3 : 0,
            }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <motion.svg
              viewBox="0 0 24 24" fill="none" strokeWidth="2.3"
              strokeLinecap="round" strokeLinejoin="round"
              className="w-[13px] h-[13px]"
              animate={{ stroke: hovered ? accent : 'rgba(255,255,255,0.35)', rotate: hovered ? -45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="13 6 19 12 13 18"/>
            </motion.svg>
          </motion.div>
        </div>

        {/* title with ghost number */}
        <div className="relative">
          <motion.span
            className="absolute -top-1 right-0 font-archivo font-black leading-none select-none pointer-events-none"
            style={{ fontSize: '60px', lineHeight: 1 }}
            animate={{ color: hovered ? accent + '1a' : 'rgba(255,255,255,0.04)', scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
          >
            {card.num}
          </motion.span>
          <motion.h3
            className="font-archivo font-bold m-0 pr-10"
            style={{ fontSize: 'clamp(17px, 1.5vw, 21px)', lineHeight: 1.2 }}
            animate={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)' }}
            transition={{ duration: 0.2 }}
          >
            {card.title}
          </motion.h3>
        </div>

        <p className="text-sm leading-[1.65] m-0 flex-1" style={{ color: 'var(--text-body)' }}>{card.desc}</p>

        {/* animated divider */}
        <motion.div
          className="h-px"
          style={{ transformOrigin: 'left' }}
          animate={{
            background: hovered
              ? `linear-gradient(90deg, ${accent}77, transparent)`
              : 'rgba(255,255,255,0.08)',
            scaleX: hovered ? 1 : 0.35,
          }}
          transition={{ duration: 0.4, ease: EASE }}
        />

        {/* bullets */}
        <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
          {card.bullets.map((b, bi) => (
            <motion.li
              key={b}
              className="flex items-start gap-[10px] text-[13px] leading-[1.5]"
              animate={{ color: hovered ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)' }}
              transition={{ duration: 0.2, delay: hovered ? bi * 0.04 : 0 }}
            >
              <motion.span
                className="mt-[2px] w-[13px] h-[13px] flex-none"
                animate={{
                  color: hovered ? accent : '#C5F23C',
                  scale: hovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.22, delay: hovered ? bi * 0.04 : 0 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8"
                     strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </motion.span>
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
    </div>
  )
}

function CardGrid({ cards, accent = '#6C2BD9' }: { cards: typeof WEB_CARDS; accent?: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8 mt-10">
      {cards.map((card, i) => (
        <ServiceCard key={card.num} card={card} accent={accent} index={i} />
      ))}
    </div>
  )
}

function StatBar({ stats, accent = '#6C2BD9' }: { stats: { value: string; label: string }[]; accent?: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 mb-2">
      {stats.map((s, i) => {
        const [hovered, setHovered] = useState(false)
        return (
          <div key={s.label} className="relative">
            <CornerMarks hovered={hovered} />
          <motion.div
            {...fu(i * 0.09)}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative rounded-2xl p-6 sm:p-8 cursor-default"
            animate={{
              y: hovered ? -5 : 0,
              boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.4)` : 'none',
            }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{
              background: 'var(--card)',
            }}
          >
            <motion.p
              className="font-archivo font-black m-0 mb-2"
              style={{ fontSize: 'clamp(22px, 2.8vw, 38px)', color: '#ffffff' }}
              animate={{ color: hovered ? accent : '#ffffff' }}
              transition={{ duration: 0.25 }}
            >
              {s.value}
            </motion.p>
            <p
              className="text-xs m-0 font-mono font-semibold tracking-wide uppercase"
              style={{ color: '#b99dff' }}
            >
              {s.label}
            </p>
          </motion.div>
          </div>
        )
      })}
    </div>
  )
}

function FeatureCard({ title, desc, accent, index }: { title: string; desc: string; accent: string; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="relative">
      <CornerMarks hovered={hovered} />
    <motion.div
      {...fu(index * 0.06)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden p-5 sm:p-6 rounded-2xl flex flex-col gap-2 cursor-default"
      animate={{
        y: hovered ? -5 : 0,
        boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.4)` : 'none',
      }}
      transition={{ duration: 0.3, ease: EASE }}
      style={{ background: 'var(--card)' }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}55)`, transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `radial-gradient(ellipse at top left, ${accent}10 0%, transparent 65%)` }}
      />
      <motion.h3
        className="font-archivo font-bold m-0 relative z-[1]"
        style={{ fontSize: '16px' }}
        animate={{ color: hovered ? accent : 'rgba(255,255,255,0.9)' }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <p className="text-sm leading-[1.65] m-0 relative z-[1]" style={{ color: 'var(--text-body)' }}>{desc}</p>
    </motion.div>
    </div>
  )
}

function ProcessCard({ step, index }: { step: typeof PROCESS_STEPS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const accent = '#6C2BD9'
  return (
    <div className="relative">
      <CornerMarks hovered={hovered} />
    <motion.div
      {...fu(index * 0.07)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden p-6 sm:p-7 rounded-2xl flex flex-col gap-3 cursor-default"
      animate={{
        y: hovered ? -6 : 0,
        boxShadow: hovered ? `0 24px 56px rgba(0,0,0,0.45)` : 'none',
      }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{ background: 'var(--card)' }}
    >
      {/* top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg, #C5F23C, #6C2BD9)', transformOrigin: 'left' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      />
      {/* bg tint */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: 'radial-gradient(ellipse at top left, rgba(108,43,217,0.1) 0%, transparent 65%)' }}
      />
      {/* giant ghost number */}
      <motion.span
        className="absolute bottom-2 right-3 font-archivo font-black leading-none select-none pointer-events-none"
        style={{ fontSize: '80px', lineHeight: 1 }}
        animate={{ color: hovered ? 'rgba(108,43,217,0.14)' : 'rgba(255,255,255,0.035)' }}
        transition={{ duration: 0.4 }}
      >
        {step.num}
      </motion.span>

      <div className="relative z-[1] flex flex-col gap-3">
        {/* lime top bar */}
        <motion.span
          className="w-8 h-[3px] rounded-full"
          animate={{ background: hovered ? '#C5F23C' : 'rgba(197,242,60,0.4)', scaleX: hovered ? 1.5 : 1 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="text-xs font-black tracking-[2.5px] uppercase"
          animate={{ color: hovered ? '#b99dff' : 'rgba(185,157,255,0.6)' }}
          transition={{ duration: 0.2 }}
        >
          {step.num}
        </motion.span>
        <motion.h3
          className="font-archivo font-bold m-0"
          style={{ fontSize: '18px' }}
          animate={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)' }}
          transition={{ duration: 0.2 }}
        >
          {step.title}
        </motion.h3>
        <p className="text-sm leading-[1.65] m-0" style={{ color: 'var(--text-body)' }}>{step.desc}</p>
      </div>
    </motion.div>
    </div>
  )
}

function Divider() {
  return (
    <motion.div
      className="h-px mx-5 sm:mx-7 origin-left"
      style={{ background: 'var(--border)' }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9, ease: EASE }}
    />
  )
}

/* ─── Page ─── */
export default function ServicesPage() {
  return (
    <main style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: 'var(--banner-h, 0px)' }}>

      {/* ── Sticky nav ── */}
      <motion.nav
        className="sticky z-50 flex items-center justify-between px-5 sm:px-8 h-[62px]"
        style={{
          top: 'var(--banner-h, 0px)',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
        }}
        initial={{ y: -62, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Link href="/" className="flex items-center gap-[8px] no-underline">
          <span className="w-[22px] h-[22px] text-lime block">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
          <span className="font-archivo font-extrabold text-[17px] sm:text-[19px] text-lime">
            Sandeep Nayak
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold no-underline px-4 py-[9px] rounded-full"
          style={{ color: 'var(--text-nav)', background: 'rgba(255,255,255,0.06)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="11 18 5 12 11 6"/>
          </svg>
          Back to Home
        </Link>
      </motion.nav>

      {/* ── Hero ── */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <motion.span
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase mb-6 px-4 py-2 rounded-full"
          style={{ background: 'rgba(108,43,217,0.18)', color: '#b99dff' }}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-lime inline-block" />
          What We Offer
        </motion.span>

        <motion.h1
          className="font-archivo font-black leading-[1.0] tracking-tight text-white m-0 mb-5"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          We build things<br />
          people actually{' '}
          <span
            className="bg-lime text-dark px-[0.1em] rounded-[10px] inline-block"
            style={{ transform: 'rotate(-1.5deg)' }}
          >
            use.
          </span>
        </motion.h1>

        <motion.p
          className="text-[15px] leading-[1.7] max-w-[520px] m-0 mb-10"
          style={{ color: 'var(--text-body)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          From pixel-perfect interfaces to resilient backend systems — we cover the full stack so you don&apos;t have to juggle five different agencies.
        </motion.p>

        {/* Anchor nav pills */}
        <div className="flex flex-wrap gap-2">
          {ANCHORS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-[9px] rounded-full no-underline transition-colors hover:border-purple-500"
              style={{ background: 'var(--card)', color: 'var(--muted)' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38 + i * 0.06, ease: EASE }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Hero stats ── */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.35 + i * 0.08, ease: EASE }}
              className="p-5 sm:p-6 rounded-2xl text-center"
              style={{ background: 'var(--card)' }}
            >
              <p
                className="font-archivo font-black m-0 mb-1"
                style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', color: '#C5F23C' }}
              >
                {s.value}
              </p>
              <p className="text-[11px] font-semibold m-0 uppercase tracking-[1.5px]" style={{ color: 'var(--muted)' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── 01 · Web Development ── */}
      <section id="web" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >01</motion.span>

          <SectionTag num="01" label="Web Development" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              {...fu()}
              className="font-archivo font-black text-white m-0 max-w-[560px]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
            >
              Websites and apps built to{' '}
              <span style={{ color: '#C5F23C' }}>perform,</span>{' '}
              not just look good.
            </motion.h2>
            <motion.p
              {...fu(0.1)}
              className="text-sm leading-[1.7] max-w-[360px] m-0 lg:text-right flex-shrink-0"
              style={{ color: 'var(--text-body)' }}
            >
              We design and develop for results — fast load times, high SEO scores, and conversion rates that justify the investment.
            </motion.p>
          </div>

          <CardGrid cards={WEB_CARDS} accent="#6C2BD9" />
        </div>
      </section>

      <Divider />

      {/* ── 02 · Mobile Apps ── */}
      <section id="mobile" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >02</motion.span>

          <SectionTag num="02" label="Mobile Applications" />

          <motion.h2
            {...fu()}
            className="font-archivo font-black text-white m-0 max-w-[620px]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
          >
            Apps your users will{' '}
            <span style={{ color: '#C5F23C' }}>open every day.</span>
          </motion.h2>

          <StatBar stats={MOBILE_STATS} accent="#f97316" />
          <CardGrid cards={MOBILE_CARDS} accent="#f97316" />
        </div>
      </section>

      <Divider />

      {/* ── 03 · UI/UX Design ── */}
      <section id="design" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >03</motion.span>

          <SectionTag num="03" label="UI/UX Design" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              {...fu()}
              className="font-archivo font-black text-white m-0 max-w-[560px]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
            >
              Design that makes users{' '}
              <span style={{ color: '#C5F23C' }}>stop scrolling.</span>
            </motion.h2>
            <motion.p
              {...fu(0.1)}
              className="text-sm leading-[1.7] max-w-[360px] m-0 lg:text-right flex-shrink-0"
              style={{ color: 'var(--text-body)' }}
            >
              Good design isn&apos;t decoration — it&apos;s the product. We research, design, test, and refine until every interaction feels effortless.
            </motion.p>
          </div>

          <CardGrid cards={DESIGN_CARDS} accent="#C5F23C" />
        </div>
      </section>

      <Divider />

      {/* ── 04 · Backend & Cloud ── */}
      <section id="backend" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >04</motion.span>

          <SectionTag num="04" label="Backend & Cloud" />

          <motion.h2
            {...fu()}
            className="font-archivo font-black text-white m-0 max-w-[620px]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
          >
            Rock-solid infrastructure{' '}
            <span style={{ color: '#C5F23C' }}>built to scale.</span>
          </motion.h2>

          <StatBar stats={BACKEND_STATS} accent="#19b3c6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-8">
            {BACKEND_FEATURES.map((f, i) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} accent="#19b3c6" index={i} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 05 · AI & Automation ── */}
      <section id="ai" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >05</motion.span>

          <SectionTag num="05" label="AI & Automation" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.h2
              {...fu()}
              className="font-archivo font-black text-white m-0 max-w-[560px]"
              style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
            >
              Make your product{' '}
              <span style={{ color: '#C5F23C' }}>smarter</span>{' '}
              than the competition.
            </motion.h2>
            <motion.p
              {...fu(0.1)}
              className="text-sm leading-[1.7] max-w-[360px] m-0 lg:text-right flex-shrink-0"
              style={{ color: 'var(--text-body)' }}
            >
              We integrate modern AI into your workflows and products — from LLM-powered assistants to fully automated data pipelines.
            </motion.p>
          </div>

          <CardGrid cards={AI_CARDS} accent="#a855f7" />
        </div>
      </section>

      <Divider />

      {/* ── 06 · How We Work ── */}
      <section id="process" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '70px' }}>
        <div className="relative">
          <motion.span
            className="absolute -top-4 left-0 font-archivo font-black select-none pointer-events-none leading-none"
            style={{ fontSize: 'clamp(64px, 14vw, 160px)', color: 'white', overflow: 'hidden' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >06</motion.span>

          <SectionTag num="06" label="How We Work" />

          <motion.h2
            {...fu()}
            className="font-archivo font-black text-white m-0 mb-10 max-w-[560px]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.08 }}
          >
            A process you can{' '}
            <span style={{ color: '#C5F23C' }}>actually predict.</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 pb-16">
        <motion.div
          {...fu()}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] flex flex-col sm:flex-row
                     items-start sm:items-center justify-between gap-8
                     px-8 sm:px-14 py-12 sm:py-16"
          style={{
            background: 'linear-gradient(120deg, #0e0e1c 0%, #131326 55%, #1a1035 100%)',
          }}
        >
          {/* glow */}
          <div
            className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(108,43,217,0.3) 0%, transparent 70%)' }}
          />
          <motion.div className="relative z-[1]" {...fl()}>
            <h2
              className="font-archivo font-black text-white m-0 mb-3 leading-[1.08]"
              style={{ fontSize: 'clamp(24px, 3.2vw, 44px)' }}
            >
              Ready to build something<br />worth talking about?
            </h2>
            <p className="text-sm m-0" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Tell us what you&apos;re building — we&apos;ll tell you exactly how we&apos;d approach it.
            </p>
          </motion.div>
          <motion.div {...fu(0.15)} className="relative z-[1] flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-[15px]
                       rounded-full font-semibold text-sm no-underline transition-opacity hover:opacity-90"
            style={{ background: '#C5F23C', color: '#0b0b0b' }}
          >
            Start a project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="13 6 19 12 13 18"/>
            </svg>
          </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #0f0338 0%, #2d0a8a 22%, #5b21b6 48%, #7c3aed 68%, #9d6eea 85%, #b49ee8 100%)',
        paddingTop: '52px',
        marginTop: '32px',
      }}>
        <Footer noAnimation />
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 sm:px-[clamp(20px,5vw,84px)] pb-10 pt-8 max-w-[1148px] mx-auto">
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            © {new Date().getFullYear()} Sandeep Nayak. All Rights Reserved.
          </span>
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            Bhubaneswar, Odisha, India
          </span>
        </div>
      </div>

    </main>
  )
}
