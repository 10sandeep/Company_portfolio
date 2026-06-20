'use client'
import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import GlareHover from './GlareHover'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  const contactItems = [
    { icon: 'email',    label: 'Email',  value: 'sandeepnayak1724@gmail.com' },
    { icon: 'phone',    label: 'Phone',  value: '+91 8456834944' },
    { icon: 'location', label: 'Studio', value: 'Bhubaneswar, Odisha, India' },
  ]

  return (
    <section id="contact" className="max-w-[1180px] mx-auto px-5 sm:px-7 py-12 sm:py-16" style={{ scrollMarginTop:'80px' }}>
      <div className="grid gap-10 md:gap-14 grid-cols-1 md:[grid-template-columns:0.9fr_1.1fr]">

        {/* left – slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-purple-light font-bold text-xs tracking-[2.5px] mb-[18px]">GET IN TOUCH</p>
          <h2 className="font-archivo font-extrabold leading-[1.02] tracking-tight m-0 mb-[18px]"
              style={{ fontSize:'clamp(30px,4vw,52px)' }}>
            Let&apos;s build something{' '}
            <span className="bg-lime text-dark px-[0.1em] rounded-[10px] inline-block"
                  style={{ transform:'rotate(-2deg)' }}>memorable</span>
          </h2>
          <p className="text-sm text-muted leading-[1.6] max-w-[380px] mb-8">
            Tell us about your brand and where you&apos;d like to take it. We usually reply within one business day.
          </p>
          <div className="flex flex-col gap-5">
            {contactItems.map((c, i) => (
              <motion.div
                key={c.label}
                className="flex items-center gap-[14px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
              >
                <span className="w-11 h-11 flex-none rounded-full flex items-center justify-center"
                      style={{ background:'rgba(108,43,217,0.18)', color:'#b99dff' }}>
                  <ContactIcon type={c.icon} />
                </span>
                <div>
                  <p className="text-xs text-muted m-0">{c.label}</p>
                  <p className="text-[15px] font-semibold mt-1 m-0" style={{ color:'#ededed' }}>{c.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* right – slides in from right */}
        <motion.div
          className="rounded-[28px] p-[clamp(24px,3vw,40px)]"
          style={{ background:'var(--card)', border:'1px solid var(--border)' }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {sent ? (
            <motion.div
              className="min-h-[300px] flex flex-col items-center justify-center text-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-16 h-16 rounded-full bg-lime text-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
                     strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h3 className="font-archivo font-bold text-2xl m-0" style={{ color:'#ededed' }}>Message sent!</h3>
              <p className="m-0 text-sm text-muted max-w-[280px]">
                Thanks for reaching out — we&apos;ll get back to you shortly.
              </p>
              <button onClick={() => setSent(false)}
                      className="mt-2 text-sm font-semibold text-purple-light cursor-pointer bg-transparent border-0">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name"  type="text"  placeholder="Jane Doe" />
                <Field label="Email" type="email" placeholder="jane@brand.com" />
              </div>
              <Field label="Company" type="text" placeholder="Your company" />
              <div className="flex flex-col gap-[7px]">
                <label className="text-xs font-semibold" style={{ color:'#bdbdbd' }}>Project details</label>
                <textarea required rows={4} placeholder="Tell us what you&apos;re working on…"
                          className="border rounded-xl px-[15px] py-[13px] text-sm bg-card text-[#ededed]
                                     outline-none resize-y focus:border-purple transition-colors duration-200
                                     placeholder:text-muted"
                          style={{ borderColor:'rgba(255,255,255,0.12)', fontFamily:'inherit' }} />
              </div>
              <motion.div
                className="mt-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <GlareHover
                  width="100%"
                  height="auto"
                  background="#C5F23C"
                  borderRadius="9999px"
                  borderColor="transparent"
                  glareColor="#ffffff"
                  glareOpacity={0.45}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={700}
                >
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 text-dark px-6 py-[15px]
                               font-semibold text-sm cursor-pointer bg-transparent border-0 w-full"
                  >
                    Send message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                         strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
                    </svg>
                  </button>
                </GlareHover>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label className="text-xs font-semibold" style={{ color:'#bdbdbd' }}>{label}</label>
      <input type={type} required placeholder={placeholder}
             className="border rounded-xl px-[15px] py-[13px] text-sm bg-card text-[#ededed]
                        outline-none focus:border-purple transition-colors duration-200
                        placeholder:text-muted"
             style={{ borderColor:'rgba(255,255,255,0.12)', fontFamily:'inherit' }} />
    </div>
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
