'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = ['App Development', 'Web Development', 'UI/UX Design']

export default function Footer() {
  return (
    <motion.footer
      className="mx-[14px] rounded-b-[40px] text-white px-[clamp(22px,5vw,70px)] pb-9 pt-20"
      style={{ background:'var(--panel)', marginTop: '-1px' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="flex justify-between gap-10 flex-wrap items-start">

          {/* brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-[9px] mb-4">
              <span className="w-[26px] h-[26px] text-lime block">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
                  <rect x="22" y="22" width="56" height="56" rx="20"/>
                  <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
                </svg>
              </span>
              <span className="font-archivo font-extrabold text-[20px] text-lime">Sandeep Nayak</span>
            </div>
            <p className="m-0 text-sm text-[#8f8f8f] leading-[1.7]">
              Bhubaneswar, Odisha, India<br/>
              +91 8456834944<br/>
              sandeepnayak1724@gmail.com
            </p>
          </motion.div>

          {/* services */}
          <div className="flex gap-[10px] flex-wrap">
            {services.map((s, i) => (
              <motion.span
                key={s}
                className="border px-4 py-[9px] rounded-full text-sm cursor-pointer text-[#cfcfcf]"
                style={{ borderColor:'rgba(255,255,255,0.12)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                whileHover={{ backgroundColor: '#ffffff', color: '#0A0A0B', transition: { duration: 0.2 } }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="h-px my-9" style={{ background:'rgba(255,255,255,0.08)' }}/>

        <motion.div
          className="flex justify-between gap-5 flex-wrap text-xs text-[#7a7a7a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="#" className="no-underline text-[#7a7a7a] hover:text-white transition-colors">
            Privacy &amp; Cookie Policy
          </Link>
          <span>Sandeep Nayak © {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </motion.footer>
  )
}
