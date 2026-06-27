'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/projects'
import { CornerMarks } from '@/components/ui/corner-marks'
import { NumberTicker } from '@/components/ui/number-ticker'

interface Props {
  onOpen: (key: string) => void
  onOpenProducts?: () => void
}

export default function RecentWork({ onOpen, onOpenProducts }: Props) {
  const { zipto, customer_app, rider_app, eazydrivez, sjdecors } = PROJECTS

  return (
    <section id="product" style={{ background: '#ffffff', scrollMarginTop: '80px' }} className="overflow-hidden">
    <div className="relative max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20">

      <div className="relative z-[2]">
        <div className="flex items-center gap-3 mb-[18px]">
          <p className="font-bold text-xs tracking-[2.5px] m-0" style={{ color: '#7c3aed' }}>RECENT WORK</p>
          <span className="text-xs font-bold px-2 py-[3px] rounded-full" style={{ background: 'rgba(108,43,217,0.10)', color: '#7c3aed' }}>
            <NumberTicker value={5} suffix=" Projects" once={false} />
          </span>
        </div>
        <motion.h2
          className="font-archivo font-bold max-w-[640px] leading-[1.18] tracking-tight m-0"
          style={{ fontSize:'clamp(24px,3.1vw,36px)', color: '#0b0b0b' }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Through meticulous planning, seamless execution, and creative problem-solving, we achieved remarkable project success.
        </motion.h2>
      </div>

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] mt-10 md:mt-14">
        {/* left column */}
        <div className="flex flex-col gap-10 md:gap-14">
          <ProjectCard data={zipto}        onOpen={onOpen} imageHeight={300} desktopHeight={400} colIndex={0} rowIndex={0} />
          <ProjectCard data={eazydrivez}   onOpen={onOpen} imageHeight={260} desktopHeight={360} colIndex={0} rowIndex={1} />
          <ProjectCard data={sjdecors}     onOpen={onOpen} imageHeight={260} desktopHeight={360} colIndex={0} rowIndex={2} />
        </div>
        {/* right column (staggered on desktop) */}
        <div className="flex flex-col gap-10 md:gap-14 md:pt-[100px]">
          <ProjectCard data={customer_app} onOpen={onOpen} imageHeight={280} desktopHeight={380} colIndex={1} rowIndex={0} spinning />
          <ProjectCard data={rider_app}    onOpen={onOpen} imageHeight={280} desktopHeight={380} colIndex={1} rowIndex={1} />
        </div>
      </div>

      {/* ── View All Products button ── */}
      <motion.div
        className="relative z-[2] flex justify-center mt-14 sm:mt-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <ViewAllButton onClick={onOpenProducts} />
      </motion.div>
    </div>
    </section>
  )
}

/* ── View All Products button ── */
function ViewAllButton({ onClick }: { onClick?: () => void }) {
  const [hovered, setHovered] = useState(false)
  const idleColor = '#0b0b0b'
  const idleStroke = '#0b0b0b'

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center gap-3 px-8 py-[15px] rounded-full cursor-pointer border-0 overflow-hidden"
      style={{ background: 'transparent', boxShadow: 'inset 0 0 0 1.5px rgba(0,0,0,0.15)' }}
    >
      {/* lime fill sweep from left */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: '#C5F23C', originX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* label */}
      <motion.span
        className="relative z-10 font-semibold text-sm tracking-wide"
        animate={{ color: hovered ? '#0B0B0B' : idleColor }}
        transition={{ duration: 0.25 }}
      >
        View All Products
      </motion.span>

      {/* arrow in circle */}
      <motion.span
        className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full"
        animate={{
          backgroundColor: hovered ? 'rgba(0,0,0,0.14)' : 'rgba(0,0,0,0.08)',
          x: hovered ? 5 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.svg
          viewBox="0 0 24 24" fill="none" strokeWidth="2.3"
          strokeLinecap="round" strokeLinejoin="round"
          className="w-[15px] h-[15px]"
          animate={{ stroke: hovered ? '#0B0B0B' : idleStroke, rotate: hovered ? -45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </motion.svg>
      </motion.span>
    </motion.button>
  )
}

interface CardProps {
  data: (typeof PROJECTS)[string]
  onOpen: (key: string) => void
  imageHeight: number
  desktopHeight?: number
  colIndex: number
  rowIndex: number
  spinning?: boolean
}

function ProjectCard({ data, onOpen, imageHeight, desktopHeight, colIndex, rowIndex, spinning }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const delay = (colIndex + rowIndex) * 0.1
  const h = desktopHeight ?? imageHeight

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, scale: 1.015, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      className="cursor-pointer relative"
      onClick={() => onOpen(data.key)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <CornerMarks hovered={hovered} />
      {/* card tile */}
      <motion.div
        className="rounded-[24px] p-[18px]"
        style={{ background: '#dcdce8' }}
        animate={{
          boxShadow: hovered
            ? '0 24px 60px rgba(108,43,217,0.18), 0 8px 20px rgba(0,0,0,0.12)'
            : '0 2px 8px rgba(0,0,0,0.06)',
        }}
        transition={{ duration: 0.35 }}
      >
        {/* image area */}
        <div
          className="relative overflow-hidden rounded-[12px] project-card-img"
          style={{ '--h-sm': `${imageHeight}px`, '--h-md': `${h}px` } as React.CSSProperties}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* subtle dark overlay on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(0,0,0,0)' }}
            animate={{ background: hovered ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0)' }}
            transition={{ duration: 0.35 }}
          />

          {/* animated arrow in white circle — bottom-right of image */}
          <motion.div
            className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-white
                       flex items-center justify-center shadow-lg overflow-hidden"
            animate={{ scale: hovered ? 1.15 : 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* arrow exits top-right, re-enters from bottom-left */}
            <motion.div
              className="absolute flex items-center justify-center"
              animate={hovered
                ? { x: [0, 14, -14, 0], y: [0, -14, 14, 0], opacity: [1, 0, 0, 1] }
                : { x: 0, y: 0, opacity: 1 }
              }
              transition={hovered
                ? { duration: 0.55, ease: [0.16, 1, 0.3, 1], times: [0, 0.45, 0.46, 1] }
                : { duration: 0.3 }
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[16px] h-[16px]"
                style={{ transform: 'rotate(-45deg)' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </motion.div>
          </motion.div>

          {/* star accent */}
          <span
            className="absolute top-3 left-3 w-[32px] h-[32px] flex items-center justify-center rounded-full pointer-events-none"
            style={{
              background: 'rgba(255,255,255,0.92)',
              boxShadow: '0 4px 16px rgba(108,43,217,0.25), 0 2px 6px rgba(0,0,0,0.12)',
            }}
          >
            <svg viewBox="0 0 100 100" fill="#6C2BD9" className="w-[16px] h-[16px]">
              <path d="M50 2 C55 32 68 45 98 50 C68 55 55 68 50 98 C45 68 32 55 2 50 C32 45 45 32 50 2 Z" />
            </svg>
          </span>

          {spinning && (
            <div className="absolute -top-8 right-[18px] w-[96px] h-[96px] rounded-full bg-lime">
              <svg className="anim-spin w-full h-full" style={{ ['--dur' as string]:'14s' }} viewBox="0 0 200 200">
                <defs><path id="cp2" d="M100,100 m-66,0 a66,66 0 1,1 132,0 a66,66 0 1,1 -132,0" /></defs>
                <text fill="#0B0B0B" style={{ fontFamily:'inherit', fontSize:16, fontWeight:700, letterSpacing:2.5 }}>
                  <textPath href="#cp2" startOffset="0">VIEW MORE • VIEW MORE • </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-dark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
                     strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                  <line x1="7" y1="17" x2="17" y2="7" /><polyline points="8 7 17 7 17 16" />
                </svg>
              </span>
            </div>
          )}
        </div>

        {/* text below image, inside tile */}
        <div className="px-1 pt-[16px] pb-[6px]">
          <motion.h3
            className="font-archivo font-bold text-[22px] mb-[7px] m-0"
            animate={{ color: hovered ? '#5b21b6' : '#6C2BD9' }}
            transition={{ duration: 0.25 }}
          >
            {data.title}
          </motion.h3>
          <p className="m-0 text-[14px] leading-relaxed" style={{ color: '#6b7280' }}>
            {data.services.slice(0, 3).join(' · ')}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
