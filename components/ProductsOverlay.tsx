'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

interface Product {
  id: string
  name: string
  category: string
  desc: string
  tech: string[]
  accent: string
  link: string
}

const PRODUCTS: Product[] = [
  {
    id: 'fitsync',
    name: 'FitSync',
    category: 'Mobile App',
    desc: 'A cross-platform fitness app with AI-powered workout plans, real-time progress analytics, and social challenges — built for iOS & Android.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    accent: '#6C2BD9',
    link: '#',
  },
  {
    id: 'growlytics',
    name: 'Growlytics',
    category: 'SaaS Platform',
    desc: 'Analytics and growth intelligence platform helping e-commerce brands understand customer behavior and increase lifetime value.',
    tech: ['Next.js', 'Python', 'AWS'],
    accent: '#C5F23C',
    link: '#',
  },
  {
    id: 'shopnest',
    name: 'ShopNest',
    category: 'E-commerce',
    desc: 'High-performance storefront with headless CMS, AI-powered search, and frictionless one-click checkout flows at global scale.',
    tech: ['Next.js', 'Shopify', 'Tailwind CSS'],
    accent: '#ff6b35',
    link: '#',
  },
  {
    id: 'medicus',
    name: 'Medicus',
    category: 'Healthcare Portal',
    desc: 'Secure patient-doctor web portal with appointment scheduling, digital prescriptions, and integrated telemedicine support.',
    tech: ['React', 'Express', 'MongoDB'],
    accent: '#19b3c6',
    link: '#',
  },
  {
    id: 'taskflow',
    name: 'TaskFlow',
    category: 'Productivity App',
    desc: 'Project management tool with Kanban boards, time tracking, team collaboration, and automated weekly progress reports.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    accent: '#e84393',
    link: '#',
  },
  {
    id: 'brandhive',
    name: 'BrandHive',
    category: 'Agency Website',
    desc: 'Creative agency site with motion-driven interactions, an editorial case study system, and a headless CMS for content updates.',
    tech: ['Next.js', 'Three.js', 'Sanity'],
    accent: '#f5a623',
    link: '#',
  },
]

interface Props { onClose: () => void }

export default function ProductsOverlay({ onClose }: Props) {
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

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: 'var(--dark)', willChange: 'transform' }}
    >
      {/* ── Sticky top bar ── */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-7 h-[60px]"
        style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-3">
          <span className="w-[20px] h-[20px] text-purple flex-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
          <span className="text-xs font-bold tracking-[2px] uppercase text-muted">Our Products</span>
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
      <div className="relative overflow-hidden px-7 pt-14 pb-10 max-w-[1180px] mx-auto">
        {/* ghost text background */}
        <div
          className="absolute top-0 left-0 font-archivo font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(80px, 14vw, 180px)', color: 'white', opacity: 0.025, whiteSpace: 'nowrap', lineHeight: 0.88 }}
        >
          DELIVERED
        </div>

        <motion.p
          className="text-purple-light font-bold text-xs tracking-[2.5px] relative z-[1]"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          WHAT WE HAVE DELIVERED
        </motion.p>

        <motion.h1
          className="font-archivo font-black leading-[0.95] tracking-tight text-white m-0 mt-4 relative z-[1]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Products we&apos;ve{' '}
          <span className="bg-lime text-dark px-[0.1em] rounded-[10px] inline-block" style={{ transform: 'rotate(-1.5deg)' }}>
            shipped
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 text-[15px] leading-[1.6] max-w-[520px] relative z-[1]"
          style={{ color: 'var(--text-dim)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          From mobile apps to SaaS platforms — real products, real users, real impact.
        </motion.p>

        {/* count badge */}
        <motion.div
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full relative z-[1]"
          style={{ background: 'var(--glass)', border: '1px solid var(--border)' }}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.65, type: 'spring', bounce: 0.4 }}
        >
          <span className="w-2 h-2 rounded-full bg-lime" />
          <span className="text-xs font-bold tracking-[1.5px] text-white">{PRODUCTS.length} Projects</span>
        </motion.div>
      </div>

      {/* divider */}
      <motion.div
        className="h-px mx-7"
        style={{ background: 'var(--border)' }}
        initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* ── Product grid ── */}
      <div className="max-w-[1180px] mx-auto px-7 py-14">
        <div className="grid grid-cols-3 gap-7">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="max-w-[1180px] mx-auto px-7 pb-14 flex justify-between items-center"
        style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="text-xs tracking-[2px] uppercase text-muted font-mono">
          Sandeep Nayak — {PRODUCTS.length} products shipped
        </span>
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full font-semibold text-sm
                     cursor-pointer border bg-transparent transition-all duration-200
                     text-[color:var(--text-sub)] hover:bg-lime hover:text-dark hover:border-lime"
          style={{ borderColor: 'var(--border)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="11 18 5 12 11 6"/>
          </svg>
          Back to home
        </button>
      </motion.div>
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isDark = product.accent === '#C5F23C'

  return (
    <motion.div
      className="rounded-[24px] overflow-hidden flex flex-col"
      style={{
        background: 'var(--elevated)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${product.accent}22` : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      initial={{ opacity: 0, y: 52, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* ── Image / gradient area ── */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        {/* gradient bg */}
        <motion.div
          className="absolute inset-0"
          style={{ background: `linear-gradient(140deg, ${product.accent}30 0%, ${product.accent}0a 100%)` }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* subtle noise */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 220" preserveAspectRatio="none">
          <filter id={`noise-p-${product.id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="400" height="220" filter={`url(#noise-p-${product.id})`}/>
        </svg>

        {/* ghost product name */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.span
            className="font-archivo font-black select-none"
            style={{ fontSize: 'clamp(64px, 8vw, 96px)', color: product.accent, opacity: 0.1, letterSpacing: '-4px', lineHeight: 1 }}
            animate={{ opacity: hovered ? 0.06 : 0.1, scale: hovered ? 0.93 : 1 }}
            transition={{ duration: 0.4 }}
          >
            {product.name.split(' ')[0]}
          </motion.span>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
             style={{ background: 'linear-gradient(to top, var(--elevated), transparent)' }} />

        {/* category badge — top left */}
        <div
          className="absolute top-4 left-4 px-3 py-[5px] rounded-full text-[10px] font-bold tracking-[1.5px] uppercase"
          style={{ background: product.accent + '22', color: product.accent, border: `1px solid ${product.accent}44` }}
        >
          {product.category}
        </div>

        {/* live indicator — top right */}
        <div className="absolute top-4 right-4 flex items-center gap-[6px]">
          <span
            className="w-[7px] h-[7px] rounded-full"
            style={{ background: '#22c55e', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }}
          />
          <span className="text-[10px] font-bold tracking-[1px] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Live</span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-4 p-7 flex-1">
        <h3
          className="font-archivo font-bold text-white m-0"
          style={{ fontSize: 'clamp(17px, 1.6vw, 21px)' }}
        >
          {product.name}
        </h3>

        <p className="text-[13px] leading-[1.72] m-0 flex-1" style={{ color: '#6a6a7a' }}>
          {product.desc}
        </p>

        {/* tech stack */}
        <div className="flex flex-wrap gap-[6px]">
          {product.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-bold tracking-[1.2px] uppercase px-[10px] py-[5px] rounded-full"
              style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#505060', fontFamily: 'var(--font-roboto-mono), monospace' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* divider */}
        <div style={{ height: 1, background: 'var(--border-2)' }} />

        {/* CTA */}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group inline-flex items-center justify-center gap-2 w-full rounded-full
                     font-bold text-sm no-underline transition-all duration-250"
          style={{
            padding: '13px 20px',
            background: hovered ? product.accent : 'var(--glass)',
            color: hovered ? (isDark ? '#0A0A0B' : '#ffffff') : 'var(--text-nav)',
            border: `1px solid ${hovered ? product.accent : 'var(--border)'}`,
            transition: 'background 0.3s, color 0.3s, border-color 0.3s',
          }}
        >
          View Product
          {/* animated arrow */}
          <motion.svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>
          </motion.svg>
        </a>
      </div>
    </motion.div>
  )
}
