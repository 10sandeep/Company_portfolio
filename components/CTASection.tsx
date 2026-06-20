'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlareHover from './GlareHover'

export default function CTASection() {
  return (
    <section className="mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] text-white relative overflow-hidden"
             style={{ background:'var(--panel)', border:'1px solid var(--border)',
                      padding:'clamp(44px,6vw,72px) clamp(18px,5vw,70px) 0' }}>
      <div className="text-center relative z-[2]">

        <motion.p
          className="text-lime font-semibold text-sm mb-[18px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Start crafting your brand story
        </motion.p>

        <motion.h2
          className="font-archivo font-black uppercase leading-none tracking-tight max-w-[980px] mx-auto m-0"
          style={{ fontSize:'clamp(32px,5.4vw,72px)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Partner with us to create a{' '}
          <span className="bg-lime text-dark px-[0.08em] rounded-[10px] inline-block"
                style={{ transform:'rotate(-1.5deg)' }}>compelling</span>{' '}
          narrative for your brand!
        </motion.h2>

        <motion.p
          className="text-sm text-muted max-w-[520px] mx-auto mt-[22px] leading-[1.55]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          Let&apos;s bring your ideas to life, start collaborating with our creative agency and turn your vision into reality.
        </motion.p>

        <motion.div
          className="mt-[30px] flex justify-center pb-[72px]"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <GlareHover
              width="auto"
              height="auto"
              background="#ffffff"
              borderRadius="9999px"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.5}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={700}
            >
              <Link href="#contact"
                    className="inline-flex items-center gap-2 text-dark px-6 py-[13px]
                               font-semibold text-sm no-underline">
                Get Started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                     strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>
                </svg>
              </Link>
            </GlareHover>
          </motion.div>
        </motion.div>
      </div>

      {/* spinning badge — hidden on mobile to avoid text overlap */}
      <motion.div
        className="hidden sm:block absolute top-10 right-[34px] w-[130px] h-[130px] rounded-full z-[1]"
        style={{ background:'#6C2BD9' }}
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'backOut' }}
      >
        <svg className="anim-spin w-full h-full block" style={{ ['--dur' as string]:'16s' }} viewBox="0 0 200 200">
          <defs><path id="cp3" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs>
          <text fill="#fff" style={{ fontFamily:'inherit', fontSize:16, fontWeight:700, letterSpacing:3 }}>
            <textPath href="#cp3" startOffset="0">LET&apos;S GET STARTED • LET&apos;S GET STARTED • </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-[42px] h-[42px] text-white block">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full block">
              <rect x="22" y="22" width="56" height="56" rx="20"/>
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)"/>
            </svg>
          </span>
        </span>
      </motion.div>
    </section>
  )
}
