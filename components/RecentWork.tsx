'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/projects'

interface Props { onOpen: (key: string) => void }

export default function RecentWork({ onOpen }: Props) {
  const { zipto, customer_app, rider_app, eazydrivez, sjdecors } = PROJECTS

  return (
    <section id="product"
             className="relative max-w-[1180px] mx-auto px-5 sm:px-7 py-14 sm:py-20"
             style={{ scrollMarginTop: '80px' }}>

      {/* floating lime shapes */}
      <div className="absolute top-10 -right-8 w-[340px] h-[340px] pointer-events-none z-0">
        <div className="anim-float relative w-full h-full" style={{ ['--dur' as string]:'7s' }}>
          <span className="absolute top-0 right-10 w-[200px] h-[200px] text-lime opacity-25">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
        </div>
      </div>

      <div className="relative z-[2]">
        <p className="text-purple-light font-bold text-xs tracking-[2.5px] mb-[18px]">RECENT WORK</p>
        <motion.h2
          className="font-archivo font-bold max-w-[640px] leading-[1.18] tracking-tight m-0"
          style={{ fontSize:'clamp(24px,3.1vw,36px)' }}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Through meticulous planning, seamless execution, and creative problem-solving, we achieved remarkable project success.
        </motion.h2>
      </div>

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[34px] mt-10 md:mt-14">
        {/* left column */}
        <div className="flex flex-col gap-6 md:gap-10">
          <ProjectCard data={zipto}        onOpen={onOpen} imageHeight={260} desktopHeight={340} colIndex={0} rowIndex={0} />
          <ProjectCard data={eazydrivez}   onOpen={onOpen} imageHeight={220} desktopHeight={300} colIndex={0} rowIndex={1} />
          <ProjectCard data={sjdecors}     onOpen={onOpen} imageHeight={220} desktopHeight={300} colIndex={0} rowIndex={2} />
        </div>
        {/* right column (staggered on desktop) */}
        <div className="flex flex-col gap-6 md:gap-10 md:pt-[90px]">
          <ProjectCard data={customer_app} onOpen={onOpen} imageHeight={240} desktopHeight={320} colIndex={1} rowIndex={0} spinning />
          <ProjectCard data={rider_app}    onOpen={onOpen} imageHeight={240} desktopHeight={320} colIndex={1} rowIndex={1} />
        </div>
      </div>
    </section>
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
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="cursor-pointer"
      onClick={() => onOpen(data.key)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* gray background tile */}
      <div
        className="rounded-[22px] p-[14px]"
        style={{
          background: 'var(--elevated)',
          border: '1px solid rgba(255,255,255,0.06)',
          transition: 'border-color 0.3s',
          ...(hovered ? { borderColor: 'rgba(255,255,255,0.12)' } : {}),
        }}
      >
        {/* image area */}
        <div
          className="relative overflow-hidden rounded-[12px] project-card-img"
          style={{ '--h-sm': `${imageHeight}px`, '--h-md': `${h}px` } as React.CSSProperties}
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />

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

          {/* lime star accent */}
          <span className="absolute top-3 left-3 w-[26px] h-[26px] text-lime pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
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
        <div className="px-1 pt-[14px] pb-[4px]">
          <h3 className="font-archivo font-bold text-[20px] mb-[6px] m-0 text-purple-light">
            {data.title}
          </h3>
          <p className="m-0 text-sm leading-relaxed text-muted">
            {data.services.slice(0, 3).join(' · ')}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
