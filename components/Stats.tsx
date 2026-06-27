'use client'
import { motion } from 'framer-motion'
import { NumberTicker } from '@/components/ui/number-ticker'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered', sub: 'Across web, mobile & AI' },
  { value: 5,  suffix: '+', label: 'Years Experience',   sub: 'Shipping quality products' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sub: 'Average project rating' },
  { value: 12, suffix: '+', label: 'Happy Clients',       sub: 'Across 5 countries' },
]

const BORDER = [
  'border-r border-b border-white/[0.07] lg:border-b-0',
  'border-b border-white/[0.07] lg:border-r',
  'border-r border-white/[0.07]',
  '',
]

export default function Stats() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20">

      {/* heading row */}
      <motion.div
        className="mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <p className="text-[11px] font-black tracking-[3px] uppercase mb-4" style={{ color: 'var(--purple-light)' }}>
          By The Numbers
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="font-archivo font-black text-white m-0 leading-[1.05]"
            style={{ fontSize: 'clamp(26px, 4vw, 50px)' }}
          >
            Real numbers.<br />Real impact.
          </h2>
          <p
            className="text-sm leading-[1.7] m-0 sm:max-w-[300px] sm:text-right"
            style={{ color: 'var(--text-dim)' }}
          >
            See how we empower fast-growing teams to ship better products and reach their goals faster.
          </p>
        </div>
      </motion.div>

      {/* top divider */}
      <motion.div
        className="h-px mb-0"
        style={{ background: 'var(--border)' }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      />

      {/* stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className={`relative p-5 sm:p-9 xl:p-11 flex flex-col gap-[10px] overflow-hidden ${BORDER[i]}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
          >
            {/* ghost index */}
            <span
              className="absolute top-1 right-3 font-archivo font-black select-none pointer-events-none leading-none"
              style={{ fontSize: 'clamp(44px,6vw,72px)', color: 'var(--ghost-text)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* value */}
            <p
              className="font-archivo font-black text-white m-0 leading-none"
              style={{ fontSize: 'clamp(28px, 3.8vw, 54px)' }}
            >
              <NumberTicker value={s.value} suffix={s.suffix} delay={i * 80} once={false} />
            </p>

            {/* label */}
            <p className="font-semibold text-[13px] sm:text-sm text-white m-0">{s.label}</p>

            {/* sub */}
            <p className="text-[11px] sm:text-xs m-0" style={{ color: 'var(--muted)' }}>{s.sub}</p>

            {/* lime → purple accent bar at bottom */}
            <div
              className="absolute bottom-0 left-0 h-[2px] rounded-full"
              style={{
                width: `${(i + 1) * 25}%`,
                background: 'linear-gradient(to right, #6C2BD9, #C5F23C)',
                opacity: 0.55,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* bottom divider */}
      <div className="h-px" style={{ background: 'var(--border)' }} />
    </section>
  )
}
