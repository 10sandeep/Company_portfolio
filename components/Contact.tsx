'use client'
import { FormEvent, useState, useId } from 'react'
import { motion } from 'framer-motion'
import { CornerMarks } from '@/components/ui/corner-marks'
import { DottedMap } from '@/registry/magicui/dotted-map'
import type { Marker } from '@/registry/magicui/dotted-map'

type MyMarker = Marker & { label: string; countryCode: string }

const MAP_MARKERS: MyMarker[] = [
  { lat: 20.3, lng: 85.8, size: 3, label: 'Bhubaneswar', countryCode: 'in' },
]

function WorldMap() {
  const id = useId()
  return (
    <div className="relative w-full mt-8 select-none overflow-hidden rounded-xl"
         style={{ maxWidth: 520 }}>
      {/* fade edges */}
      <div className="absolute inset-0 pointer-events-none z-10"
           style={{ background: 'radial-gradient(ellipse at center, transparent 55%, var(--dark) 100%)' }} />
      <DottedMap<MyMarker>
        markers={MAP_MARKERS}
        mapColor="rgba(255,255,255,0.18)"
        dotSize={0.35}
        dotSpacing={35}
        renderMarkerOverlay={({ marker, x, y, r }) => {
          // r is already scaled to the tiny 69×35 viewBox (~0.76 units for size 2)
          const clipId = `${id}-clip`.replace(/:/g, '-')
          const imgR  = r * 1.4          // flag circle
          const stem  = r * 3            // pin line length
          const fontSize  = r * 0.85
          const pillH = r * 1.5
          const pillW = marker.label.length * (fontSize * 0.62) + r * 1.2
          const pillX = x + imgR + r * 0.5
          const pillY = y - pillH / 2
          return (
            <g style={{ pointerEvents: 'none' }}>
              {/* pulse rings */}
              <circle cx={x} cy={y} r={r * 3.5} fill="rgba(108,43,217,0.10)" />
              <circle cx={x} cy={y} r={r * 2.2} fill="rgba(108,43,217,0.18)" />

              {/* flag */}
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>
              <image
                href={`https://flagcdn.com/w80/${marker.countryCode}.webp`}
                x={x - imgR} y={y - imgR}
                width={imgR * 2} height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />

              {/* pin stem */}
              <line x1={x} y1={y - imgR} x2={x} y2={y - imgR - stem}
                    stroke="#6C2BD9" strokeWidth={0.3} opacity={0.7} />

              {/* label pill */}
              <rect x={pillX} y={pillY} width={pillW} height={pillH}
                    rx={pillH / 2} fill="rgba(0,0,0,0.55)" />
              <text x={pillX + r * 0.6} y={y + fontSize * 0.35}
                    fontSize={fontSize} fill="white" fontWeight="600">
                {marker.label}
              </text>
            </g>
          )
        }}
      />
    </div>
  )
}

/* ── dot-grid background for the form card ── */
function DotGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contact-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-dots)" />
    </svg>
  )
}

/* ── simple labelled input ── */
function Field({
  label, type = 'text', placeholder, value, onChange,
}: {
  label: string; type?: string; placeholder: string
  value: string; onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full text-sm px-4 py-[11px] rounded-[10px] outline-none bg-transparent"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: `1px solid ${focused ? 'rgba(108,43,217,0.7)' : 'rgba(255,255,255,0.09)'}`,
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'inherit',
          transition: 'border-color 0.2s',
        }}
      />
    </div>
  )
}

function TextareaField({
  label, placeholder, value, onChange,
}: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</label>
      <textarea
        required
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full text-sm px-4 py-[11px] rounded-[10px] outline-none resize-y bg-transparent"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: `1px solid ${focused ? 'rgba(108,43,217,0.7)' : 'rgba(255,255,255,0.09)'}`,
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'inherit',
          transition: 'border-color 0.2s',
        }}
      />
    </div>
  )
}

/* ── main component ── */
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formHovered, setFormHovered] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20" style={{ scrollMarginTop: '80px' }}>
      <div className="grid gap-10 md:gap-16 grid-cols-1 md:[grid-template-columns:0.9fr_1.1fr]">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* email icon box */}
          <div
            className="w-[60px] h-[60px] rounded-[16px] flex items-center justify-center mb-7"
            style={{ background: 'var(--elevated)', boxShadow: '0 0 0 4px rgba(108,43,217,0.12), 0 8px 24px rgba(0,0,0,0.3)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#6C2BD9" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 5L2 7"/>
            </svg>
          </div>

          <h2 className="font-archivo font-black leading-[1.05] tracking-tight m-0 mb-4"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Contact us
          </h2>

          <p className="text-sm leading-[1.7] mb-8 max-w-[420px]" style={{ color: 'var(--muted)' }}>
            Tell us about your brand and where you&apos;d like to take it. We usually reply within one business day.
          </p>

          {/* contact info row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm mb-2" style={{ color: 'var(--muted)' }}>
            <span>sandeepnayak1724@gmail.com</span>
            <span className="opacity-40">•</span>
            <span>+91 8456834944</span>
            <span className="opacity-40">•</span>
            <span>Bhubaneswar, India</span>
          </div>

          <WorldMap />
        </motion.div>

        {/* ── Right — form card ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative self-start"
          onMouseEnter={() => setFormHovered(true)}
          onMouseLeave={() => setFormHovered(false)}
        >
          <CornerMarks hovered={formHovered} />
          <div
            className="rounded-[20px] p-7 sm:p-9 relative overflow-hidden"
            style={{ background: 'var(--card)' }}
          >
            <DotGrid />

            {sent ? (
              <motion.div
                className="relative z-10 min-h-[360px] flex flex-col items-center justify-center text-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-16 h-16 rounded-full bg-lime text-dark flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
                       strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <h3 className="font-archivo font-bold text-2xl m-0" style={{ color: 'var(--text-sub)' }}>Message sent!</h3>
                <p className="m-0 text-sm max-w-[280px]" style={{ color: 'var(--muted)' }}>
                  Thanks for reaching out — we&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-semibold cursor-pointer bg-transparent border-0"
                  style={{ color: '#b99dff' }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name"     placeholder="Sandeep Nayak"       value={name}    onChange={setName} />
                  <Field label="Email address" placeholder="hello@example.com"   type="email" value={email}   onChange={setEmail} />
                </div>
                <Field label="Company" placeholder="Your company name" value={company} onChange={setCompany} />
                <TextareaField label="Message" placeholder="Type your message here…" value={message} onChange={setMessage} />

                <button
                  type="submit"
                  className="mt-1 self-start px-7 py-[12px] rounded-[10px] text-sm font-semibold cursor-pointer border-0 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C5F23C'; (e.currentTarget as HTMLButtonElement).style.color = '#0b0b0b'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.14)' }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactIcon({ type }: { type: string }) {
  if (type === 'email') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
    </svg>
  )
  if (type === 'phone') return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
