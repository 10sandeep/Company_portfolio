'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ExpertiseOverlay, { type ExpertiseKey } from './ExpertiseOverlay'

const ease = [0.16, 1, 0.3, 1] as const

function cardProps(i: number) {
  return {
    initial:     { opacity: 0, y: 52, scale: 0.96 },
    whileInView: { opacity: 1, y: 0,  scale: 1 },
    viewport:    { once: false, amount: 0.15 } as const,
    transition:  { duration: 0.65, delay: i * 0.13, ease },
    whileHover:  { y: -8, transition: { duration: 0.3, ease: 'easeOut' as const } },
  }
}

export default function Expertise() {
  const [openKey, setOpenKey] = useState<ExpertiseKey | null>(null)

  return (
    <>
      <section
        id="about"
        className="mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] overflow-hidden"
        style={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          padding: 'clamp(32px,5vw,56px) clamp(18px,4vw,56px)',
          scrollMarginTop: '80px',
        }}
      >
        <div className="max-w-[1120px] mx-auto">

          <motion.div
            className="flex justify-between items-start md:items-end gap-4 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-archivo font-bold m-0 tracking-tight"
                style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}>Our Expertise</h2>
            <p className="max-w-[300px] text-left md:text-right text-sm text-muted m-0 leading-relaxed">
              Transform ideas into reality by combining creativity, strategy, and expertise.
            </p>
          </motion.div>

          <motion.div
            className="h-px bg-white/[0.08] my-7"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">

            {/* App Development */}
            <ExpertiseCard index={0} onOpen={() => setOpenKey('app')}>
              {(hovered) => (
                <>
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-archivo font-bold text-2xl leading-[1.05] m-0">App<br/>Development</h3>
                    <TrainArrow hovered={hovered} />
                  </div>
                  <p className="m-0 text-sm text-muted leading-relaxed">
                    Building high-performance native and cross-platform mobile apps for iOS and Android
                  </p>
                  <div className="mt-auto h-[140px] rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-4">
                      <g style={{ animation: 'exp-float 3s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
                        <rect x="30" y="10" width="40" height="70" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                        <rect x="36" y="20" width="28" height="40" rx="3" fill="rgba(108,43,217,0.4)"/>
                        <circle cx="50" cy="72" r="3" fill="rgba(255,255,255,0.3)"/>
                        <rect x="38" y="22" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" style={{ animation: 'exp-pulse 2s ease-in-out infinite' }}/>
                        <rect x="49" y="22" width="8" height="8" rx="2" fill="rgba(108,43,217,0.8)" style={{ animation: 'exp-pulse 2s ease-in-out 0.5s infinite' }}/>
                        <rect x="38" y="33" width="8" height="8" rx="2" fill="rgba(108,43,217,0.8)" style={{ animation: 'exp-pulse 2s ease-in-out 1s infinite' }}/>
                        <rect x="49" y="33" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" style={{ animation: 'exp-pulse 2s ease-in-out 1.5s infinite' }}/>
                      </g>
                      <g style={{ animation: 'exp-float 3s ease-in-out 1s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
                        <rect x="82" y="22" width="36" height="62" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                        <rect x="87" y="30" width="26" height="36" rx="3" fill="rgba(108,43,217,0.4)"/>
                        <circle cx="100" cy="76" r="3" fill="rgba(255,255,255,0.3)"/>
                        <rect x="89" y="32" width="22" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                        <rect x="89" y="39" width="16" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
                        <rect x="89" y="45" width="19" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
                      </g>
                      <circle cx="140" cy="35" r="4" fill="rgba(108,43,217,0.6)" style={{ animation: 'exp-signal 1.4s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                      <circle cx="152" cy="28" r="4" fill="rgba(108,43,217,0.8)" style={{ animation: 'exp-signal 1.4s ease-in-out 0.35s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                      <circle cx="164" cy="20" r="4" fill="#6C2BD9" style={{ animation: 'exp-signal 1.4s ease-in-out 0.7s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                    </svg>
                  </div>
                </>
              )}
            </ExpertiseCard>

            {/* Web Development – purple */}
            <ExpertiseCard index={1} onOpen={() => setOpenKey('web')} purple>
              {(hovered) => (
                <>
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-archivo font-bold text-2xl leading-[1.05] m-0">Web<br/>Development</h3>
                    <TrainArrow hovered={hovered} dark />
                  </div>
                  <p className="m-0 text-sm text-[#e3d6fb] leading-relaxed">
                    Crafting fast, scalable, and responsive websites and web applications end-to-end
                  </p>
                  <div className="mt-auto relative">
                    <div className="h-[140px] rounded-2xl bg-white/20 flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-4">
                        <rect x="10" y="10" width="160" height="100" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                        <rect x="10" y="10" width="160" height="22" rx="8" fill="rgba(255,255,255,0.15)"/>
                        <rect x="10" y="24" width="160" height="8" fill="rgba(255,255,255,0.15)"/>
                        <circle cx="24" cy="21" r="4" fill="rgba(255,255,255,0.4)"/>
                        <circle cx="36" cy="21" r="4" fill="rgba(255,255,255,0.4)"/>
                        <circle cx="48" cy="21" r="4" fill="rgba(255,255,255,0.4)"/>
                        <rect x="60" y="16" width="80" height="10" rx="5" fill="rgba(255,255,255,0.2)"/>
                        <rect x="22" y="40" width="30" height="4" rx="2" fill="rgba(255,255,255,0.6)" style={{ animation: 'exp-pulse 2.5s ease-in-out infinite' }}/>
                        <rect x="56" y="40" width="50" height="4" rx="2" fill="rgba(255,255,255,0.3)" style={{ animation: 'exp-pulse 2.5s ease-in-out 0.2s infinite' }}/>
                        <rect x="22" y="50" width="20" height="4" rx="2" fill="rgba(255,255,255,0.4)" style={{ animation: 'exp-pulse 2.5s ease-in-out 0.4s infinite' }}/>
                        <rect x="46" y="50" width="60" height="4" rx="2" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2.5s ease-in-out 0.6s infinite' }}/>
                        <rect x="22" y="60" width="40" height="4" rx="2" fill="rgba(255,255,255,0.5)" style={{ animation: 'exp-pulse 2.5s ease-in-out 0.8s infinite' }}/>
                        <rect x="66" y="60" width="35" height="4" rx="2" fill="rgba(255,255,255,0.3)" style={{ animation: 'exp-pulse 2.5s ease-in-out 1s infinite' }}/>
                        <rect x="22" y="70" width="25" height="4" rx="2" fill="rgba(255,255,255,0.3)" style={{ animation: 'exp-pulse 2.5s ease-in-out 1.2s infinite' }}/>
                        <rect x="51" y="70" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2.5s ease-in-out 1.4s infinite' }}/>
                        <rect x="22" y="80" width="45" height="4" rx="2" fill="rgba(255,255,255,0.4)" style={{ animation: 'exp-pulse 2.5s ease-in-out 1.6s infinite' }}/>
                        <rect x="16" y="38" width="148" height="2" rx="1" fill="rgba(255,255,255,0.25)" style={{ animation: 'exp-scan 3s ease-in-out infinite' }}/>
                        <rect x="110" y="78" width="2" height="10" rx="1" fill="rgba(255,255,255,0.9)" style={{ animation: 'exp-blink 1s step-end infinite' }}/>
                      </svg>
                    </div>
                    <span className="absolute left-[14px] -bottom-[18px] w-[52px] h-[52px] rounded-full bg-lime
                                     text-dark flex items-center justify-center"
                          style={{ border: '4px solid #6C2BD9' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
                           strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </ExpertiseCard>

            {/* UI/UX Design */}
            <ExpertiseCard index={2} onOpen={() => setOpenKey('uiux')}>
              {(hovered) => (
                <>
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-archivo font-bold text-2xl leading-[1.05] m-0">UI/UX<br/>Design</h3>
                    <TrainArrow hovered={hovered} />
                  </div>
                  <p className="m-0 text-sm text-muted leading-relaxed">
                    Designing intuitive interfaces and seamless experiences that delight users
                  </p>
                  <div className="mt-auto h-[140px] rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-4">
                      <rect x="15" y="10" width="100" height="80" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                      <rect x="22" y="18" width="86" height="14" rx="3" fill="rgba(108,43,217,0.5)" style={{ animation: 'exp-glow 2.5s ease-in-out infinite' }}/>
                      <rect x="22" y="36" width="40" height="28" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                      <rect x="66" y="36" width="42" height="12" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                      <rect x="66" y="52" width="42" height="12" rx="2" fill="rgba(108,43,217,0.35)" style={{ animation: 'exp-pulse 2s ease-in-out 0.6s infinite' }}/>
                      <rect x="22" y="68" width="86" height="8" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                      <circle cx="130" cy="25" r="10" fill="rgba(108,43,217,0.9)" style={{ animation: 'exp-signal 1.8s ease-in-out infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                      <circle cx="148" cy="25" r="10" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" style={{ animation: 'exp-signal 1.8s ease-in-out 0.45s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                      <circle cx="163" cy="25" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" style={{ animation: 'exp-signal 1.8s ease-in-out 0.9s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}/>
                      <g style={{ animation: 'exp-float 3.5s ease-in-out 0.5s infinite', transformBox: 'fill-box', transformOrigin: 'center' }}>
                        <path d="M125 55 L145 40 L155 50 L135 65 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
                        <circle cx="155" cy="50" r="3" fill="rgba(108,43,217,0.8)"/>
                        <line x1="125" y1="55" x2="119" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
                      </g>
                      <circle cx="130" cy="80" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out infinite' }}/>
                      <circle cx="140" cy="80" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.25s infinite' }}/>
                      <circle cx="150" cy="80" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.5s infinite' }}/>
                      <circle cx="160" cy="80" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.75s infinite' }}/>
                      <circle cx="130" cy="90" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.5s infinite' }}/>
                      <circle cx="140" cy="90" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 0.75s infinite' }}/>
                      <circle cx="150" cy="90" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 1s infinite' }}/>
                      <circle cx="160" cy="90" r="1.5" fill="rgba(255,255,255,0.2)" style={{ animation: 'exp-pulse 2s ease-in-out 1.25s infinite' }}/>
                    </svg>
                  </div>
                </>
              )}
            </ExpertiseCard>

          </div>
        </div>
      </section>

      {openKey && (
        <ExpertiseOverlay
          expertiseKey={openKey}
          onClose={() => setOpenKey(null)}
        />
      )}
    </>
  )
}

/* ── ExpertiseCard wrapper — manages hover state + renders content via render prop ── */
function ExpertiseCard({
  children,
  index,
  onOpen,
  purple,
}: {
  children: (hovered: boolean) => React.ReactNode
  index: number
  onOpen: () => void
  purple?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      {...cardProps(index)}
      className="rounded-[22px] p-[26px] flex flex-col gap-[18px] cursor-pointer"
      style={
        purple
          ? { background: '#6C2BD9' }
          : { background: 'var(--elevated)', border: '1px solid var(--border-2)' }
      }
      onClick={onOpen}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {children(hovered)}
    </motion.div>
  )
}

/* ── Animated arrow inside white circle (train exit on hover) ── */
function TrainArrow({ hovered, dark }: { hovered: boolean; dark?: boolean }) {
  const bg = dark ? 'rgba(0,0,0,0.18)' : 'white'
  const stroke = dark ? 'white' : '#0A0A0B'

  return (
    <motion.div
      className="w-11 h-11 rounded-full flex items-center justify-center flex-none overflow-hidden"
      style={{ background: bg, border: dark ? '1.5px solid rgba(255,255,255,0.3)' : 'none' }}
      animate={{ scale: hovered ? 1.13 : 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={
          hovered
            ? { x: [0, 13, -13, 0], y: [0, -13, 13, 0], opacity: [1, 0, 0, 1] }
            : { x: 0, y: 0, opacity: 1 }
        }
        transition={
          hovered
            ? { duration: 0.52, ease: [0.16, 1, 0.3, 1], times: [0, 0.44, 0.45, 1] }
            : { duration: 0.3 }
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[17px] h-[17px]"
          style={{ transform: 'rotate(-45deg)' }}
        >
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="13 6 19 12 13 18"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}
