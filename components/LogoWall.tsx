'use client'
import { motion } from 'framer-motion'
import { useIsDark } from '@/hooks/useIsDark'

const logos = [
  { name: "Kellogg's",  style: 'italic font-bold font-archivo' },
  { name: "L'ORÉAL",    style: 'font-semibold tracking-[2px] font-archivo' },
  { name: "Heineken",   style: 'font-bold font-archivo' },
  { name: 'Jeep',       style: 'font-black tracking-[-1px] font-archivo' },
  { name: 'Champion',   style: 'italic font-extrabold font-inter' },
  { name: 'Spotify',    style: 'font-bold font-inter' },
  { name: 'Allianz',    style: 'font-bold tracking-[1px] font-archivo' },
  { name: 'Coca-Cola',  style: 'italic font-bold font-inter' },
  { name: 'Gillette',   style: 'italic font-black font-archivo' },
  { name: 'NETFLIX',    style: 'font-extrabold tracking-[2px] font-archivo' },
]

export default function LogoWall() {
  const isDark = useIsDark()
  return (
    <section className="max-w-[1080px] mx-auto px-4 sm:px-7 py-10">
      <div className="py-8 sm:py-11 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
           style={{ borderTop: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    gap: '24px 12px' }}>
        {logos.map((l, i) => (
          <motion.span
            key={l.name}
            className={`${l.style} text-[#6f6f6f] text-lg sm:text-[22px] text-center`}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ color: isDark ? '#ededed' : 'var(--text)', scale: 1.06, transition: { duration: 0.2 } }}
          >
            {l.name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
