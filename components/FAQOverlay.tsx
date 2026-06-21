'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'

interface FAQ {
  q: string
  a: string
}

interface FAQSection {
  label: string
  accent: string
  items: FAQ[]
}

const SECTIONS: FAQSection[] = [
  {
    label: 'General',
    accent: '#6C2BD9',
    items: [
      {
        q: 'What services do you offer?',
        a: 'We offer three core services: App Development (native iOS & Android, cross-platform React Native / Flutter), Web Development (Next.js, full-stack, SaaS platforms), and UI/UX Design (research, wireframing, prototyping, design systems). We handle projects end-to-end — from strategy through launch.',
      },
      {
        q: 'Do you work with startups and small businesses?',
        a: 'Absolutely. Some of our most exciting work has been with early-stage startups where we help shape the product from scratch. We adapt our process to fit your stage — whether you need an MVP in weeks or a fully scaled platform.',
      },
      {
        q: 'How do I get started?',
        a: 'Simply reach out via the Contact section with a brief description of your project. We\'ll schedule a discovery call, understand your goals, and send over a tailored proposal within 2–3 business days.',
      },
      {
        q: 'Do you take on freelance or one-off projects?',
        a: 'Yes. We work on both project-based engagements and longer retainer relationships. Short-scope tasks like a landing page or UI audit are equally welcome — just reach out and we\'ll find the right structure for you.',
      },
    ],
  },
  {
    label: 'Process & Timeline',
    accent: '#C5F23C',
    items: [
      {
        q: 'How long does a typical project take?',
        a: 'A simple marketing website typically takes 2–4 weeks. A mid-size web or mobile app runs 6–12 weeks depending on feature complexity. Large SaaS or multi-platform products are scoped individually. We always share a detailed timeline before work begins.',
      },
      {
        q: 'What does your design and development process look like?',
        a: 'Every project follows our six-step process: Discovery → Design → Development → Testing → Launch → Post-launch Support. You\'re involved at every milestone with regular check-ins, demos, and feedback rounds — no black-box surprises.',
      },
      {
        q: 'How many revision rounds are included?',
        a: 'Design phases include two structured revision rounds. Development deliverables include one round of feedback integration before handoff. Additional rounds can be added — we prefer clear milestones over unlimited open-ended revisions.',
      },
      {
        q: 'Can you work with an existing team or codebase?',
        a: 'Yes. We regularly collaborate with in-house developers and designers, or step in to rescue or extend an existing codebase. We\'ll start with a technical audit to understand what\'s there before touching anything.',
      },
    ],
  },
  {
    label: 'Pricing & Contracts',
    accent: '#19b3c6',
    items: [
      {
        q: 'How is pricing structured?',
        a: 'We work on fixed-scope project pricing or monthly retainers — whichever fits your needs. Fixed pricing gives you cost certainty for well-defined projects. Retainers work well for ongoing product development or design support. All pricing is transparent with no hidden fees.',
      },
      {
        q: 'Do you require a deposit before starting?',
        a: 'Yes, we typically require a 40% deposit to begin work, with the balance split across project milestones. This structure keeps both sides aligned and ensures continuity. Payment terms are clearly laid out in the contract.',
      },
      {
        q: 'What happens if my requirements change mid-project?',
        a: 'Scope changes happen. We handle them transparently — any new requirements outside the original scope are assessed and quoted separately as a change order. You\'ll always know the cost before we proceed.',
      },
    ],
  },
  {
    label: 'Technical',
    accent: '#e84393',
    items: [
      {
        q: 'What technologies do you specialise in?',
        a: 'Frontend: React, Next.js, TypeScript, Tailwind CSS. Mobile: React Native, Flutter. Backend: Node.js, Python, PostgreSQL, MongoDB. Cloud: AWS, Vercel, Firebase. Design: Figma, ProtoPie. We choose the right stack for your project — not the one we\'re most comfortable with.',
      },
      {
        q: 'Will I own the code and designs after the project?',
        a: 'Yes — 100%. Upon final payment, all source code, design files, and assets are transferred to you with no licensing restrictions. You can take the work anywhere.',
      },
      {
        q: 'Do you provide post-launch maintenance and support?',
        a: 'Yes. We offer optional post-launch support packages covering bug fixes, dependency updates, performance monitoring, and feature additions. Most clients opt for a 3-month support window after launch, which we highly recommend.',
      },
    ],
  },
]

interface Props { onClose: () => void }

export default function FAQOverlay({ onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    gsap.to(panelRef.current, { y: '100%', duration: 0.65, ease: 'power4.in', onComplete: onClose })
  }

  const handleCloseToContact = () => {
    gsap.to(panelRef.current, {
      y: '100%',
      duration: 0.65,
      ease: 'power4.in',
      onComplete: () => {
        onClose()
        requestAnimationFrame(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        })
      },
    })
  }

  useEffect(() => {
    gsap.fromTo(panelRef.current, { y: '100%' }, { y: '0%', duration: 0.75, ease: 'power4.out', clearProps: 'transform' })
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const total = SECTIONS.reduce((n, s) => n + s.items.length, 0)

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: 'var(--dark)', willChange: 'transform', scrollBehavior: 'smooth' }}
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
          <span className="text-xs font-bold tracking-[2px] uppercase text-muted">FAQ</span>
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
      <div className="relative overflow-hidden px-4 sm:px-7 pt-10 sm:pt-14 pb-10 sm:pb-12 max-w-[1180px] mx-auto">
        {/* ghost text */}
        <div
          className="absolute top-0 right-0 font-archivo font-black leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(80px, 15vw, 200px)', color: 'white', opacity: 0.022, lineHeight: 0.88, right: '2%' }}
        >
          FAQ
        </div>

        <motion.p
          className="text-purple-light font-bold text-xs tracking-[2.5px] relative z-[1]"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          HAVE QUESTIONS?
        </motion.p>

        <motion.h1
          className="font-archivo font-black leading-[0.95] tracking-tight text-white m-0 mt-4 relative z-[1]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Frequently asked{' '}
          <span className="bg-lime text-dark px-[0.1em] rounded-[10px] inline-block" style={{ transform: 'rotate(-1.5deg)' }}>
            questions
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 text-[15px] leading-[1.6] max-w-[500px] relative z-[1]"
          style={{ color: 'var(--text-dim)' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Everything you need to know about working with us. Can&apos;t find the answer? Just reach out.
        </motion.p>

        {/* count + CTA */}
        <motion.div
          className="mt-6 flex items-center gap-4 flex-wrap relative z-[1]"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ background: 'var(--glass)', border: '1px solid var(--border)' }}
          >
            <span className="w-2 h-2 rounded-full bg-lime" />
            <span className="text-xs font-bold tracking-[1.5px] text-white">{total} Questions</span>
          </div>
          <button
            onClick={handleCloseToContact}
            className="text-xs font-bold tracking-[1px] transition-colors bg-transparent border-0
                       cursor-pointer p-0 hover:text-white/60"
            style={{ color: 'var(--text-dim)' }}
          >
            Still have questions? Contact us →
          </button>
        </motion.div>
      </div>

      {/* divider */}
      <motion.div
        className="h-px mx-4 sm:mx-7" style={{ background: 'var(--border)' }}
        initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* ── FAQ sections ── */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-10 sm:py-14 flex flex-col gap-8 sm:gap-12 md:gap-16">
        {SECTIONS.map((section, si) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: si * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* section header */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-bold tracking-[2.5px] uppercase px-3 py-[5px] rounded-full"
                style={{ background: section.accent + '1a', color: section.accent, border: `1px solid ${section.accent}44` }}
              >
                {section.label}
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-2)' }} />
            </div>

            {/* accordion items */}
            <div className="flex flex-col gap-3">
              {section.items.map((item, ii) => (
                <AccordionItem
                  key={ii}
                  item={item}
                  accent={section.accent}
                  delay={si * 0.05 + ii * 0.06}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── CTA block ── */}
      <motion.div
        className="max-w-[1180px] mx-auto px-4 sm:px-7 pb-12 sm:pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="rounded-[28px] px-6 sm:px-10 py-8 sm:py-12 flex items-center justify-between gap-6 flex-wrap"
          style={{ background: 'var(--elevated)', border: '1px solid var(--border)' }}
        >
          <div>
            <h3 className="font-archivo font-bold text-white m-0" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
              Still have questions?
            </h3>
            <p className="text-sm text-muted mt-2 m-0 max-w-[380px] leading-relaxed">
              We&apos;re happy to walk you through anything. Drop us a message and we&apos;ll reply within one business day.
            </p>
          </div>
          <button
            onClick={handleCloseToContact}
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full font-bold text-sm
                       cursor-pointer border-0 transition-all duration-200 bg-lime text-dark
                       hover:opacity-90 flex-none"
          >
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ── Bottom bar ── */}
      <div
        className="max-w-[1180px] mx-auto px-4 sm:px-7 pb-8 sm:pb-10 flex flex-wrap justify-between items-center gap-4"
        style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}
      >
        <span className="text-xs tracking-[2px] uppercase text-muted font-mono">
          Sandeep Nayak — FAQ
        </span>
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-2 px-6 py-[13px] rounded-full font-semibold text-sm
                     cursor-pointer border bg-transparent transition-all duration-200
                     text-[color:var(--text-sub)] hover:bg-lime hover:text-dark hover:border-lime"
          style={{ borderColor: 'var(--border)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="11 18 5 12 11 6"/>
          </svg>
          Back to home
        </button>
      </div>
    </div>
  )
}

/* ── Single accordion item ── */
function AccordionItem({ item, accent, delay }: { item: FAQ; accent: string; delay: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-[16px] overflow-hidden cursor-pointer"
      style={{
        background: open ? 'var(--elevated)' : 'var(--panel)',
        border: `1px solid ${open ? 'var(--border)' : 'var(--border-2)'}`,
        transition: 'background 0.25s, border-color 0.25s',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setOpen(!open)}
    >
      {/* question row */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center gap-4">
          {/* accent dot */}
          <span
            className="w-[6px] h-[6px] rounded-full flex-none"
            style={{ background: open ? accent : 'rgba(255,255,255,0.2)', transition: 'background 0.25s' }}
          />
          <span
            className="font-archivo font-semibold text-[15px] leading-snug"
            style={{ color: open ? 'var(--text)' : 'var(--text-nav)', transition: 'color 0.25s' }}
          >
            {item.q}
          </span>
        </div>

        {/* chevron */}
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-none"
          style={{ background: open ? accent + '22' : 'rgba(255,255,255,0.05)', border: `1px solid ${open ? accent + '44' : 'rgba(255,255,255,0.08)'}`, transition: 'background 0.25s, border-color 0.25s' }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]"
               style={{ color: open ? accent : 'rgba(255,255,255,0.4)' }}>
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </motion.div>
      </div>

      {/* answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 sm:px-6 pb-5 sm:pb-6 sm:pl-[52px] pl-4">
              <div className="h-px mb-5" style={{ background: 'var(--border)' }} />
              <p className="text-[14px] leading-[1.78] m-0" style={{ color: 'var(--text-body)' }}>
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
