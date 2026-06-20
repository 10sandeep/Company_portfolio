'use client'
import { motion } from 'framer-motion'

const logos = [
  { name: "Kellogg's",  style: 'italic font-bold text-[26px] font-archivo' },
  { name: "L'ORÉAL",    style: 'font-semibold text-[24px] tracking-[3px] font-archivo' },
  { name: "★ Heineken", style: 'font-bold text-[22px] font-archivo' },
  { name: 'Jeep',       style: 'font-black text-[26px] tracking-[-1px] font-archivo' },
  { name: 'Champion',   style: 'italic font-extrabold text-[24px] font-hanken' },
  { name: 'Spotify',    style: 'font-bold text-[23px] font-hanken' },
  { name: 'Allianz',    style: 'font-bold text-[23px] tracking-[1px] font-archivo' },
  { name: 'Coca-Cola',  style: 'italic font-bold text-[22px] font-hanken' },
  { name: 'Gillette',   style: 'italic font-black text-[24px] font-archivo' },
  { name: 'NETFLIX',    style: 'font-extrabold text-[23px] tracking-[2px] font-archivo' },
]

export default function LogoWall() {
  return (
    <section className="max-w-[1080px] mx-auto px-7 py-10">
      <div className="py-11 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
           style={{ borderTop: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    gap: '28px 16px' }}>
        {logos.map((l, i) => (
          <motion.span
            key={l.name}
            className={`${l.style} text-[#6f6f6f]`}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ color: '#ededed', scale: 1.06, transition: { duration: 0.2 } }}
          >
            {l.name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
