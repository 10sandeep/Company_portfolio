'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlareHover from '@/components/GlareHover'
import Footer from '@/components/Footer'

/* ── Floating label input ── */
function FloatingField({ label, type = 'text' }: { label: string; type?: string }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || !!value
  return (
    <div className="relative rounded-xl" style={{
      background: 'var(--panel)',
      border: `1px solid ${focused ? 'rgba(108,43,217,0.8)' : 'rgba(255,255,255,0.1)'}`,
      transition: 'border-color 0.2s',
    }}>
      <input
        type={type} required value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent px-[15px] pt-[22px] pb-[8px] text-sm text-[#ededed] outline-none"
        style={{ fontFamily: 'inherit' }}
      />
      <motion.label
        className="absolute left-[15px] pointer-events-none font-medium text-sm"
        style={{ transformOrigin: 'left top' }}
        animate={{ top: active ? 7 : 15, scale: active ? 0.78 : 1, color: active ? (focused ? '#b99dff' : '#6b7280') : '#9ca3af' }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.label>
    </div>
  )
}

/* ── Floating label select ── */
function FloatingSelect({ label, options }: { label: string; options: string[] }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || !!value
  return (
    <div className="relative rounded-xl" style={{
      background: 'var(--panel)',
      border: `1px solid ${focused ? 'rgba(108,43,217,0.8)' : 'rgba(255,255,255,0.1)'}`,
      transition: 'border-color 0.2s',
    }}>
      <select
        required value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent px-[15px] pt-[22px] pb-[8px] text-sm text-[#ededed] outline-none appearance-none cursor-pointer"
        style={{ fontFamily: 'inherit' }}
      >
        <option value="" disabled hidden />
        {options.map(o => (
          <option key={o} value={o} className="bg-[#1a1a2e] text-white">{o}</option>
        ))}
      </select>
      <motion.label
        className="absolute left-[15px] pointer-events-none font-medium text-sm"
        style={{ transformOrigin: 'left top' }}
        animate={{ top: active ? 7 : 15, scale: active ? 0.78 : 1, color: active ? (focused ? '#b99dff' : '#6b7280') : '#9ca3af' }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.label>
      <span className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#6b7280' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </span>
    </div>
  )
}

/* ── Floating label textarea ── */
function FloatingTextarea({ label, rows = 5 }: { label: string; rows?: number }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const active = focused || !!value
  return (
    <div className="relative rounded-xl" style={{
      background: 'var(--panel)',
      border: `1px solid ${focused ? 'rgba(108,43,217,0.8)' : 'rgba(255,255,255,0.1)'}`,
      transition: 'border-color 0.2s',
    }}>
      <textarea
        required rows={rows} value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent px-[15px] pt-[28px] pb-[10px] text-sm text-[#ededed] outline-none resize-y"
        style={{ fontFamily: 'inherit' }}
      />
      <motion.label
        className="absolute left-[15px] pointer-events-none font-medium text-sm"
        style={{ transformOrigin: 'left top' }}
        animate={{ top: active ? 8 : 14, scale: active ? 0.78 : 1, color: active ? (focused ? '#b99dff' : '#6b7280') : '#9ca3af' }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.label>
    </div>
  )
}

const INFO_BLOCKS = [
  {
    icon: 'email',
    label: 'Email',
    value: 'sandeepnayak1724@gmail.com',
    sub: 'We reply within 1 business day',
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+91 8456834944',
    sub: 'Available Mon–Fri, 9am–6pm IST',
  },
  {
    icon: 'clock',
    label: 'Working Hours',
    value: 'Mon – Fri, 9:00am – 6:00pm IST',
    sub: 'Weekends by appointment only',
  },
  {
    icon: 'location',
    label: 'Global HQ',
    value: 'Bhubaneswar, Odisha, India',
    sub: 'Open to remote collaboration worldwide',
  },
]

const SUBJECTS = [
  'App Development',
  'Web Development',
  'UI/UX Design',
  'Backend Solutions',
  'AI/ML Development',
  'Brand Strategy',
  'General Enquiry',
]

function InfoIcon({ type }: { type: string }) {
  const cls = 'w-[20px] h-[20px]'
  if (type === 'email') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
    </svg>
  )
  if (type === 'phone') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
  if (type === 'clock') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <main style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      {/* ── Sticky nav ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 h-[62px]"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
        }}
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
          className="flex items-center gap-2 text-sm font-semibold no-underline px-4 py-[9px] rounded-full transition-colors"
          style={{ color: 'var(--text-nav)', border: '1px solid var(--border)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="11 18 5 12 11 6"/>
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* ── Page body ── */}
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20">

        {/* ── 2-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* ── Left: info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* pill */}
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(108,43,217,0.18)', color: '#b99dff', border: '1px solid rgba(108,43,217,0.3)' }}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-lime inline-block" />
              Get In Touch
            </span>

            {/* Heading */}
            <h1
              className="font-archivo font-black leading-[1.0] tracking-tight text-white m-0 mb-5"
              style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}
            >
              Let&apos;s Talk.<br />
              <span style={{ color: 'var(--lime)' }}>About Your</span><br />
              Project.
            </h1>

            <p className="text-sm leading-[1.7] mb-10 m-0 max-w-[420px]" style={{ color: 'var(--text-body)' }}>
              Whether you&apos;re starting from scratch or scaling an existing product — we&apos;d love to hear about your vision and figure out how we can help.
            </p>

            {/* Info blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO_BLOCKS.map((block, i) => (
                <motion.div
                  key={block.label}
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="w-10 h-10 flex-none rounded-xl flex items-center justify-center mt-[2px]"
                    style={{ background: 'rgba(108,43,217,0.2)', color: '#b99dff' }}
                  >
                    <InfoIcon type={block.icon} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[1.5px] m-0 mb-1" style={{ color: 'var(--muted)' }}>
                      {block.label}
                    </p>
                    <p className="text-sm font-semibold text-white m-0 mb-1 leading-[1.4] break-all">{block.value}</p>
                    <p className="text-xs m-0" style={{ color: 'var(--muted)' }}>{block.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            className="rounded-[28px] p-[clamp(24px,4vw,44px)]"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.div
                className="min-h-[400px] flex flex-col items-center justify-center text-center gap-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-20 h-20 rounded-full bg-lime text-dark flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
                       strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <div>
                  <h2 className="font-archivo font-bold text-2xl text-white m-0 mb-2">Message sent!</h2>
                  <p className="text-sm m-0 max-w-[300px]" style={{ color: 'var(--text-body)' }}>
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-semibold cursor-pointer bg-transparent border-0"
                  style={{ color: '#b99dff' }}
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mb-2">
                  <h2 className="font-archivo font-bold text-white m-0 mb-1" style={{ fontSize: 'clamp(20px,2.5vw,28px)' }}>
                    Send us a message
                  </h2>
                  <p className="text-xs m-0" style={{ color: 'var(--muted)' }}>
                    All fields are required. We&apos;ll get back to you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingField label="Full Name" type="text" />
                  <FloatingField label="Phone Number" type="tel" />
                </div>
                <FloatingField label="Email Address" type="email" />
                <FloatingSelect label="Subject" options={SUBJECTS} />
                <FloatingTextarea label="Tell us about your project…" rows={5} />

                <motion.div
                  className="mt-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlareHover
                    width="100%" height="auto" background="#C5F23C" borderRadius="9999px"
                    borderColor="transparent" glareColor="#ffffff" glareOpacity={0.4}
                    glareAngle={-30} glareSize={300} transitionDuration={700}
                  >
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 text-dark px-6 py-[15px]
                                 font-semibold text-sm cursor-pointer bg-transparent border-0 w-full"
                    >
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                           strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
                      </svg>
                    </button>
                  </GlareHover>
                </motion.div>

                <p className="text-center text-xs mt-1 m-0" style={{ color: 'var(--muted)' }}>
                  We respect your privacy. Your details will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #0f0338 0%, #2d0a8a 22%, #5b21b6 48%, #7c3aed 68%, #9d6eea 85%, #b49ee8 100%)',
        paddingTop: '52px',
        marginTop: '80px',
      }}>
        <Footer />
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
