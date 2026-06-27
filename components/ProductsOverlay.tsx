'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Footer from '@/components/Footer'
import { CornerMarks } from '@/components/ui/corner-marks'

interface Product {
  id: string
  name: string
  category: string
  desc: string
  tech: string[]
  accent: string
  link: string
  image?: string
  websiteUrl?: string
  appStoreUrl?: string
  playStoreUrl?: string
}

const PRODUCTS: Product[] = [
  /* ── Real portfolio projects ── */
  {
    id: 'zipto',
    name: 'Zipto',
    category: 'Logistics · Web',
    desc: 'Fast, trackable deliveries — simplified for the digital age. Complete web platform for a last-mile logistics startup with live tracking and motion-driven onboarding.',
    tech: ['UI/UX Design', 'Web Development', 'Brand Identity', 'Dashboard Design'],
    accent: '#FF6B35',
    link: '#',
    image: '/images/zipto.png',
    websiteUrl: 'https://zipto.in',
  },
  {
    id: 'customer_app',
    name: 'Zipto Customer App',
    category: 'Mobile · Logistics',
    desc: 'Book, track and manage deliveries — all from your pocket. Designed for iOS and Android with a 3-tap booking flow and smart address memory.',
    tech: ['Mobile UI Design', 'UX Flow', 'iOS & Android', 'Prototype & Handoff'],
    accent: '#FF6B35',
    link: '#',
    image: '/images/customer_app.png',
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  {
    id: 'rider_app',
    name: 'Zipto Rider App',
    category: 'Mobile · Operations',
    desc: 'Empowering riders with real-time data and smart routing. Live order queue, optimised navigation, earnings dashboard and in-app dispatch chat.',
    tech: ['Mobile UI Design', 'UX Research', 'Maps Integration', 'iOS & Android'],
    accent: '#FF6B35',
    link: '#',
    image: '/images/rider_app.png',
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  {
    id: 'eazydrivez',
    name: 'Eazydrivez',
    category: 'Self-Rental · Web',
    desc: 'Rent a car or bike on your terms — no hassle, no agent. Complete web platform with browse, booking, KYC verification and payment in one seamless flow.',
    tech: ['UI/UX Design', 'Web Development', 'Booking System', 'Mobile-first Design'],
    accent: '#19b3c6',
    link: '#',
    image: '/images/eazydrivez.png',
    websiteUrl: 'https://eazydrivez.com/',
  },
  {
    id: 'sjdecors',
    name: 'SJ Decors',
    category: 'Interior Design · Web',
    desc: 'Showcasing spaces that feel like stories. Premium portfolio website with editorial project grid, curated services and a lead-generation contact flow.',
    tech: ['Brand Identity', 'Web Design', 'Web Development', 'Photography Direction'],
    accent: '#C5F23C',
    link: '#',
    image: '/images/sjdecors.png',
    websiteUrl: 'https://www.sjdecors.in/',
  },
  /* ── Other shipped products (commented out) ── */
  // {
  //   id: 'fitsync',
  //   name: 'FitSync',
  //   category: 'Mobile App',
  //   desc: 'A cross-platform fitness app with AI-powered workout plans, real-time progress analytics, and social challenges — built for iOS & Android.',
  //   tech: ['React Native', 'Node.js', 'PostgreSQL'],
  //   accent: '#6C2BD9',
  //   link: '#',
  // },
  // {
  //   id: 'growlytics',
  //   name: 'Growlytics',
  //   category: 'SaaS Platform',
  //   desc: 'Analytics and growth intelligence platform helping e-commerce brands understand customer behavior and increase lifetime value.',
  //   tech: ['Next.js', 'Python', 'AWS'],
  //   accent: '#C5F23C',
  //   link: '#',
  // },
  // {
  //   id: 'shopnest',
  //   name: 'ShopNest',
  //   category: 'E-commerce',
  //   desc: 'High-performance storefront with headless CMS, AI-powered search, and frictionless one-click checkout flows at global scale.',
  //   tech: ['Next.js', 'Shopify', 'Tailwind CSS'],
  //   accent: '#ff6b35',
  //   link: '#',
  // },
  // {
  //   id: 'medicus',
  //   name: 'Medicus',
  //   category: 'Healthcare Portal',
  //   desc: 'Secure patient-doctor web portal with appointment scheduling, digital prescriptions, and integrated telemedicine support.',
  //   tech: ['React', 'Express', 'MongoDB'],
  //   accent: '#19b3c6',
  //   link: '#',
  // },
  // {
  //   id: 'taskflow',
  //   name: 'TaskFlow',
  //   category: 'Productivity App',
  //   desc: 'Project management tool with Kanban boards, time tracking, team collaboration, and automated weekly progress reports.',
  //   tech: ['Flutter', 'Firebase', 'Dart'],
  //   accent: '#e84393',
  //   link: '#',
  // },
  // {
  //   id: 'brandhive',
  //   name: 'BrandHive',
  //   category: 'Agency Website',
  //   desc: 'Creative agency site with motion-driven interactions, an editorial case study system, and a headless CMS for content updates.',
  //   tech: ['Next.js', 'Three.js', 'Sanity'],
  //   accent: '#f5a623',
  //   link: '#',
  // },
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
      className="fixed left-0 right-0 bottom-0 z-[200] overflow-y-auto"
      data-lenis-prevent
      style={{ top: 'var(--banner-h, 0px)', background: 'var(--dark)', willChange: 'transform', scrollBehavior: 'smooth' }}
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
      <div className="relative overflow-hidden px-4 sm:px-7 pt-10 sm:pt-14 pb-8 sm:pb-10 max-w-[1180px] mx-auto">
        {/* ghost text background */}
        <div
          className="absolute top-0 left-0 font-archivo font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(60px, 14vw, 180px)', color: 'white', opacity: 0.025, lineHeight: 0.88, overflow: 'hidden' }}
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
          style={{ background: 'var(--glass)' }}
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
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <motion.div
        className="px-4 sm:px-7 pb-10 sm:pb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <CtaBanner onClose={handleClose} />
      </motion.div>

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
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isLime = product.accent === '#C5F23C'

  return (
    <div className="relative">
      <CornerMarks hovered={hovered} />
    <motion.div
      className="relative rounded-[24px] overflow-hidden flex flex-col cursor-pointer"
      style={{ background: 'var(--elevated)' }}
      initial={{ opacity: 0, y: 52, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.55), 0 0 40px ${product.accent}18`
          : '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* ── Top accent bar ── */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none rounded-t-[24px]"
        style={{ height: 2, background: `linear-gradient(90deg, ${product.accent}, ${product.accent}88)`, originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* ── Shimmer sweep ── */}
      <motion.div
        className="absolute inset-y-0 z-10 pointer-events-none"
        style={{
          width: '45%',
          background: `linear-gradient(90deg, transparent 0%, ${product.accent}12 50%, transparent 100%)`,
        }}
        initial={{ x: '-120%' }}
        animate={{ x: hovered ? '340%' : '-120%' }}
        transition={{ duration: hovered ? 0.65 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* ── Image / gradient area ── */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        {product.image ? (
          /* real project photo */
          <>
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            {/* edge blend */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(to bottom, transparent 50%, var(--elevated) 100%),
                             linear-gradient(to right, var(--elevated) 0%, transparent 15%, transparent 85%, var(--elevated) 100%)`,
              }}
            />
            {/* accent tint on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              style={{ background: `linear-gradient(to top, ${product.accent}28 0%, transparent 60%)` }}
            />
          </>
        ) : (
          /* gradient placeholder */
          <>
            <motion.div
              className="absolute inset-0"
              style={{ background: `linear-gradient(140deg, ${product.accent}30 0%, ${product.accent}0a 100%)` }}
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 220" preserveAspectRatio="none">
              <filter id={`noise-p-${product.id}`}>
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
              </filter>
              <rect width="400" height="220" filter={`url(#noise-p-${product.id})`}/>
            </svg>
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
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                 style={{ background: 'linear-gradient(to top, var(--elevated), transparent)' }} />
          </>
        )}

        {/* category badge — top left */}
        <div
          className="absolute top-4 left-4 px-3 py-[5px] rounded-full text-[10px] font-bold tracking-[1.5px] uppercase"
          style={{ background: product.accent + '22', color: product.accent, backdropFilter: 'blur(6px)' }}
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
      <div className="relative z-[1] flex flex-col gap-4 p-7 flex-1" style={{ background: 'var(--elevated)' }}>

        {/* name + category */}
        <div>
          <motion.h3
            className="font-archivo font-bold m-0 leading-tight"
            style={{ fontSize: 'clamp(17px, 1.6vw, 21px)' }}
            animate={{ color: hovered ? product.accent : '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            {product.name}
          </motion.h3>
          <motion.p
            className="text-[10px] font-bold tracking-[2px] uppercase mt-1 m-0"
            animate={{ color: hovered ? product.accent + 'cc' : '#3a3a4a' }}
            transition={{ duration: 0.3 }}
          >
            {product.category}
          </motion.p>
        </div>

        {/* description */}
        <motion.p
          className="text-[13px] leading-[1.72] m-0 flex-1"
          animate={{ color: hovered ? '#c8c8c8' : '#5e5e6e' }}
          transition={{ duration: 0.3 }}
        >
          {product.desc}
        </motion.p>

        {/* tech / service tags — stagger animate on hover */}
        <div className="flex flex-wrap gap-[6px]">
          {product.tech.map((t, ti) => (
            <motion.span
              key={t}
              className="text-[10px] font-bold tracking-[1.2px] uppercase px-[10px] py-[5px] rounded-full"
              style={{ fontFamily: 'var(--font-roboto-mono), monospace' }}
              animate={hovered ? {
                borderColor: product.accent + '77',
                color: product.accent,
                backgroundColor: product.accent + '15',
                y: -2,
              } : {
                borderColor: 'rgba(255,255,255,0.09)',
                color: '#4a4a5a',
                backgroundColor: 'transparent',
                y: 0,
              }}
              transition={{ duration: 0.22, delay: hovered ? ti * 0.05 : 0, ease: 'easeOut' }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* animated divider — expands from left on hover */}
        <motion.div
          style={{ height: 1, background: product.accent, originX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0.2, opacity: hovered ? 0.45 : 0.12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* CTA row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Website link */}
          {product.websiteUrl && (
            <motion.a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-[7px] rounded-full font-bold text-xs no-underline px-4 py-[9px] border"
              animate={{
                background: hovered ? product.accent : 'rgba(255,255,255,0.05)',
                color: hovered ? (isLime ? '#0A0A0B' : '#ffffff') : 'rgba(255,255,255,0.45)',
                borderColor: hovered ? product.accent : 'rgba(255,255,255,0.09)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* globe icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] flex-none">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Visit Website
            </motion.a>
          )}

          {/* App Store link */}
          {product.appStoreUrl && (
            <motion.a
              href={product.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-[7px] rounded-full font-bold text-xs no-underline px-4 py-[9px] border"
              animate={{
                background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                color: hovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
                borderColor: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.09)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Apple icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] flex-none">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </motion.a>
          )}

          {/* Play Store link */}
          {product.playStoreUrl && (
            <motion.a
              href={product.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-[7px] rounded-full font-bold text-xs no-underline px-4 py-[9px] border"
              animate={{
                background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                color: hovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
                borderColor: hovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.09)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Android/Play icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[12px] h-[12px] flex-none">
                <path d="M3.18 23.76a1.05 1.05 0 0 0 1.06-.08l11.62-6.54-2.5-2.5zm14.84-10.71L15.35 10.4 12.68 13l2.67 2.67 3.68-2.07a1.1 1.1 0 0 0 .56-.96 1.07 1.07 0 0 0-.57-.59zM3.18.24A1.07 1.07 0 0 0 2.5 1.22v21.56a1.07 1.07 0 0 0 .68.98l.08.04 12.09-12.06v-.28zm8.83 11.44L3.26.69l-.08.04A1.07 1.07 0 0 0 2.5 1.7"/>
              </svg>
              Play Store
            </motion.a>
          )}

          {/* fallback if no urls set */}
          {!product.websiteUrl && !product.appStoreUrl && !product.playStoreUrl && (
            <motion.a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full font-bold text-xs no-underline px-4 py-[9px] border"
              animate={{
                background: hovered ? product.accent : 'rgba(255,255,255,0.05)',
                color: hovered ? (isLime ? '#0A0A0B' : '#ffffff') : 'rgba(255,255,255,0.45)',
                borderColor: hovered ? product.accent : 'rgba(255,255,255,0.09)',
              }}
              transition={{ duration: 0.3 }}
            >
              View Product
            </motion.a>
          )}

          {/* diagonal arrow — pushed to end */}
          <motion.div
            className="ml-auto"
            animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0, opacity: hovered ? 1 : 0.22 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                 strokeLinecap="round" strokeLinejoin="round"
                 className="w-[15px] h-[15px]"
                 style={{ color: product.accent }}>
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

/* ── Circuit paths & nodes ── */
const CIRCUIT_PATHS = [
  'M 0 38 L 80 38 L 80 18 L 200 18 L 200 38 L 310 38',
  'M 200 38 L 200 78 L 130 78 L 130 108 L 260 108',
  'M 310 38 L 310 78 L 420 78 L 420 38 L 500 38',
  'M 420 78 L 420 118 L 340 118 L 340 78',
  'M 260 108 L 370 108 L 370 128 L 500 128',
  'M 80 38 L 80 78 L 50 78 L 50 108 L 130 108',
]
const CIRCUIT_NODES: [number, number][] = [
  [80, 38], [80, 18], [200, 18], [200, 38], [200, 78],
  [310, 38], [420, 38], [420, 78], [420, 118], [340, 118],
  [340, 78], [130, 78], [130, 108], [260, 108], [370, 108],
  [370, 128], [80, 78], [50, 78], [50, 108],
]
const FLOAT_TOKENS = [
  { text: 'const',     x: '52%',  y: '80%', delay: 0 },
  { text: '{ }',       x: '61%',  y: '60%', delay: 0.7 },
  { text: '=>',        x: '70%',  y: '75%', delay: 1.3 },
  { text: 'async',     x: '78%',  y: '50%', delay: 0.4 },
  { text: 'npm run',   x: '58%',  y: '35%', delay: 1.0 },
  { text: '.tsx',      x: '85%',  y: '65%', delay: 0.2 },
  { text: 'deploy()',  x: '66%',  y: '88%', delay: 1.6 },
  { text: '01101001',  x: '74%',  y: '20%', delay: 0.9 },
  { text: 'API',       x: '88%',  y: '38%', delay: 0.5 },
  { text: 'docker',    x: '55%',  y: '18%', delay: 1.8 },
  { text: 'CI/CD',     x: '80%',  y: '85%', delay: 0.3 },
  { text: 'TypeScript',x: '63%',  y: '50%', delay: 1.4 },
]

/* ── CTA Banner ── */
function CtaBanner({ onClose }: { onClose: () => void }) {
  const [hoverStart, setHoverStart]       = useState(false)
  const [hoverServices, setHoverServices] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] flex flex-col sm:flex-row
                 items-start sm:items-center justify-between gap-8 sm:gap-14
                 px-8 sm:px-16 py-12 sm:py-20"
      style={{
        background: 'linear-gradient(120deg, #0e0e1c 0%, #131326 50%, #1a1035 100%)',
      }}
    >
      {/* ── Tech animation layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* circuit SVG — right 60%, faded on left edge */}
        <div
          className="absolute inset-0"
          style={{ maskImage: 'linear-gradient(to right, transparent 35%, black 60%)', WebkitMaskImage: 'linear-gradient(to right, transparent 35%, black 60%)' }}
        >
          <svg
            viewBox="0 0 500 150"
            className="absolute right-0 top-0 h-full"
            style={{ width: '62%' }}
            preserveAspectRatio="xMaxYMid meet"
          >
            {/* base dim traces */}
            {CIRCUIT_PATHS.map((d, i) => (
              <path key={`base-${i}`} d={d} fill="none"
                    stroke="rgba(108,43,217,0.12)" strokeWidth="1.2"/>
            ))}

            {/* animated draw-in traces */}
            {CIRCUIT_PATHS.map((d, i) => (
              <motion.path
                key={`draw-${i}`}
                d={d} fill="none"
                stroke={i % 2 === 0 ? 'rgba(108,43,217,0.7)' : 'rgba(197,242,60,0.55)'}
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.55,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: 'easeInOut',
                  times: [0, 0.45, 0.75, 1],
                }}
              />
            ))}

            {/* travelling highlight dot on each trace */}
            {CIRCUIT_PATHS.map((d, i) => (
              <motion.circle
                key={`dot-${i}`}
                r="3"
                fill={i % 2 === 0 ? '#6C2BD9' : '#C5F23C'}
                filter={`url(#glow-${i % 2})`}
                style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
                initial={{ offsetDistance: '0%', opacity: 0 }}
                animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.55,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: 'easeInOut',
                  times: [0, 0.1, 0.9, 1],
                }}
              />
            ))}

            {/* glow filters */}
            <defs>
              <filter id="glow-0" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="glow-1" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* pulsing nodes */}
            {CIRCUIT_NODES.map(([cx, cy], i) => (
              <motion.circle
                key={`node-${i}`}
                cx={cx} cy={cy} r="2.8"
                fill="none"
                stroke={i % 3 === 0 ? '#6C2BD9' : i % 3 === 1 ? '#C5F23C' : '#19b3c6'}
                strokeWidth="1"
                animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0.9, 0.25] }}
                transition={{
                  duration: 2.2,
                  delay: i * 0.18,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            ))}
          </svg>
        </div>

        {/* floating code tokens */}
        {FLOAT_TOKENS.map((token, i) => (
          <motion.span
            key={token.text + i}
            className="absolute font-mono text-[10px] font-bold tracking-[1.5px] select-none"
            style={{
              left: token.x,
              top: token.y,
              color: i % 3 === 0 ? 'rgba(108,43,217,0.7)' : i % 3 === 1 ? 'rgba(197,242,60,0.55)' : 'rgba(25,179,198,0.55)',
            }}
            animate={{ y: [0, -18, 0], opacity: [0, 0.9, 0] }}
            transition={{
              duration: 3.2,
              delay: token.delay,
              repeat: Infinity,
              repeatDelay: 1.8,
              ease: 'easeInOut',
            }}
          >
            {token.text}
          </motion.span>
        ))}

        {/* horizontal scanner beam */}
        <motion.div
          className="absolute top-0 bottom-0 w-[1px] pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(108,43,217,0.5) 40%, rgba(197,242,60,0.4) 60%, transparent)', left: '50%' }}
          animate={{ x: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* purple glow top-right */}
        <div className="absolute -top-16 -right-16 w-[340px] h-[340px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(108,43,217,0.3) 0%, transparent 70%)' }}/>
        <div className="absolute bottom-0 right-[20%] w-[200px] h-[200px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(197,242,60,0.07) 0%, transparent 70%)' }}/>
      </div>

      {/* ── Left: copy ── */}
      <div className="relative z-[1]">
        <h2
          className="font-archivo font-black text-white leading-[1.1] tracking-tight m-0 mb-3"
          style={{ fontSize: 'clamp(26px, 3.4vw, 48px)' }}
        >
          Let&apos;s build your next<br className="hidden sm:block" /> product together.
        </h2>
        <p className="text-sm m-0" style={{ color: 'rgba(255,255,255,0.45)' }}>
          From idea to production in weeks — with clean architecture that scales.
        </p>
      </div>

      {/* ── Right: buttons ── */}
      <div className="relative z-[1] flex items-center gap-3 flex-shrink-0 flex-wrap">
        <motion.button
          onClick={onClose}
          onHoverStart={() => setHoverStart(true)}
          onHoverEnd={() => setHoverStart(false)}
          whileTap={{ scale: 0.96 }}
          className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-[13px]
                     rounded-full font-semibold text-sm cursor-pointer border-0"
          style={{ background: '#ffffff', color: '#0b0b0b' }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: '#C5F23C', originX: 0 }}
            animate={{ scaleX: hoverStart ? 1 : 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="relative z-10">Start a project</span>
          <motion.svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"
            strokeLinecap="round" strokeLinejoin="round"
            className="relative z-10 w-[14px] h-[14px]"
            animate={{ x: hoverStart ? 3 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="13 6 19 12 13 18"/>
          </motion.svg>
        </motion.button>

        <motion.button
          onHoverStart={() => setHoverServices(true)}
          onHoverEnd={() => setHoverServices(false)}
          whileTap={{ scale: 0.96 }}
          className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-[13px]
                     rounded-full font-semibold text-sm cursor-pointer border-0"
          style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
          animate={{
            borderColor: hoverServices ? 'rgba(197,242,60,0.5)' : 'rgba(255,255,255,0.14)',
            color: hoverServices ? '#C5F23C' : 'rgba(255,255,255,0.7)',
          }}
          transition={{ duration: 0.22 }}
        >
          View services
        </motion.button>
      </div>
    </div>
  )
}
