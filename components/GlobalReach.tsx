'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const W = 1000
const H = 460

function ll(lon: number, lat: number): [number, number] {
  return [((lon + 180) / 360) * W, ((90 - lat) / 180) * H]
}

function pip(px: number, py: number, poly: [number, number][]): boolean {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j]
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

const CONTINENTS: [number, number][][] = [
  [ll(-168,72),ll(-140,68),ll(-55,72),ll(-52,48),ll(-65,44),ll(-82,25),ll(-87,16),ll(-92,16),ll(-105,22),ll(-120,30),ll(-135,58),ll(-160,60),ll(-168,66)],
  [ll(-82,10),ll(-62,10),ll(-35,-4),ll(-35,-10),ll(-50,-34),ll(-65,-56),ll(-68,-54),ll(-75,-45),ll(-78,-3),ll(-77,8)],
  [ll(-10,36),ll(30,36),ll(40,46),ll(35,70),ll(15,72),ll(-5,64),ll(-10,48)],
  [ll(-18,38),ll(52,38),ll(52,12),ll(45,-12),ll(35,-36),ll(18,-36),ll(-18,-28),ll(-18,18)],
  [ll(26,70),ll(180,70),ll(180,0),ll(140,-10),ll(100,2),ll(100,20),ll(78,8),ll(62,25),ll(40,40),ll(26,70)],
  [ll(114,-22),ll(136,-12),ll(152,-22),ll(152,-28),ll(148,-38),ll(140,-38),ll(118,-34),ll(114,-28)],
  [ll(-44,84),ll(-18,76),ll(-18,72),ll(-42,72),ll(-56,76),ll(-52,82)],
  [ll(4,58),ll(28,58),ll(32,70),ll(20,72),ll(14,66),ll(4,58)],
  [ll(-6,50),ll(2,51),ll(0,58),ll(-5,58),ll(-8,54)],
]

const DOT_SPACING = 10
const ALL_DOTS: { x: number; y: number; land: boolean }[] = []
for (let x = 0; x <= W; x += DOT_SPACING) {
  for (let y = 0; y <= H; y += DOT_SPACING) {
    ALL_DOTS.push({ x, y, land: CONTINENTS.some(p => pip(x, y, p)) })
  }
}

const CITIES = [
  { name: 'New York',   lon: -74.0, lat: 40.7  },
  { name: 'London',     lon: -0.1,  lat: 51.5  },
  { name: 'Dubai',      lon: 55.3,  lat: 25.2  },
  { name: 'Mumbai',     lon: 72.8,  lat: 19.1  },
  { name: 'Singapore',  lon: 103.8, lat: 1.3   },
  { name: 'Tokyo',      lon: 139.7, lat: 35.7  },
  { name: 'Sydney',     lon: 151.2, lat: -33.9 },
  { name: 'São Paulo',  lon: -46.6, lat: -23.5 },
].map(c => ({ ...c, x: ll(c.lon, c.lat)[0], y: ll(c.lon, c.lat)[1] }))

const CITY_MAP = Object.fromEntries(CITIES.map(c => [c.name, c]))

const CONNECTIONS = [
  ['New York',  'London'],
  ['London',    'Dubai'],
  ['Dubai',     'Mumbai'],
  ['Mumbai',    'Singapore'],
  ['Singapore', 'Tokyo'],
  ['New York',  'São Paulo'],
  ['Tokyo',     'Sydney'],
]

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const lift = Math.hypot(b.x - a.x, b.y - a.y) * 0.32
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${mx.toFixed(1)} ${(my - lift).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
}

const SEGMENTS = [
  { text: 'Remote',      highlight: false },
  { text: 'work.',       highlight: false },
  { text: 'Real',        highlight: false },
  { text: 'results.',    highlight: false },
  { text: 'Delivered',   highlight: false },
  { text: 'from',        highlight: false },
  { text: 'anywhere',    highlight: true  },
  { text: 'on',          highlight: false },
  { text: 'the',         highlight: false },
  { text: 'planet.',     highlight: false },
]

const STATS = [
  { value: '30+',  label: 'Countries Reached' },
  { value: '8',    label: 'Cities Connected'  },
  { value: '100%', label: 'Remote-Ready'       },
]

export default function GlobalReach() {
  const headRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (headRef.current) {
        const words = headRef.current.querySelectorAll<HTMLElement>('.gr-word')
        gsap.set(words, { opacity: 0.12 })
        gsap.to(words, {
          opacity: 1,
          stagger: 0.09,
          ease: 'none',
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 82%',
            end: 'bottom 30%',
            scrub: 1.2,
          },
        })
      }
    }, headRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] text-white relative overflow-hidden"
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--border)',
        padding: 'clamp(44px,6vw,72px) clamp(18px,5vw,70px) 0',
      }}
    >
      {/* ── Spinning badge ── */}
      <motion.div
        className="hidden sm:block absolute top-10 right-[34px] w-[130px] h-[130px] rounded-full z-[3]"
        style={{ background: '#6C2BD9' }}
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'backOut' }}
      >
        <svg
          className="anim-spin w-full h-full block"
          style={{ ['--dur' as string]: '16s' }}
          viewBox="0 0 200 200"
        >
          <defs>
            <path id="gr-cp" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/>
          </defs>
          <text fill="#fff" style={{ fontFamily: 'inherit', fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>
            <textPath href="#gr-cp" startOffset="0">GLOBAL REACH • GLOBAL REACH • </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-[42px] h-[42px] text-white block">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                 strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </span>
        </span>
      </motion.div>

      {/* ── Centred text block ── */}
      <div className="text-center relative z-[2]">
        <motion.p
          className="text-lime font-semibold text-sm mb-[18px]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Global Presence
        </motion.p>

        <h2
          ref={headRef}
          className="font-archivo font-black uppercase leading-[1.05] tracking-tight max-w-[980px] mx-auto m-0 text-white"
          style={{ fontSize: 'clamp(32px,5.4vw,72px)' }}
        >
          {SEGMENTS.map((seg, i) => (
            <span key={i} className="gr-word inline-block">
              {seg.highlight ? (
                <span
                  className="bg-lime text-dark px-[0.08em] rounded-[10px] inline-block"
                  style={{ transform: 'rotate(-1.5deg)' }}
                >
                  {seg.text}
                </span>
              ) : (
                seg.text
              )}
              {i < SEGMENTS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>

        <motion.p
          className="text-sm text-muted max-w-[520px] mx-auto mt-[22px] leading-[1.55]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          Break free from traditional boundaries. We collaborate with clients across the globe,
          delivering impactful digital experiences regardless of borders.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex items-center justify-center gap-8 sm:gap-14 mt-9 sm:mt-11 flex-wrap"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center">
              <p
                className="font-archivo font-black text-white m-0 leading-none"
                style={{ fontSize: 'clamp(22px, 2.8vw, 36px)' }}
              >
                {s.value}
              </p>
              <p className="text-[11px] text-muted m-0 mt-2 uppercase tracking-[1.6px] font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── World map — flush bottom ── */}
      <motion.div
        className="relative mt-10 sm:mt-14 overflow-hidden"
        style={{ background: '#05050d', borderTop: '1px solid rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* centre spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 72% 58% at 50% 54%, rgba(20,32,72,0.95) 0%, rgba(8,12,30,0.7) 45%, transparent 75%)',
          }}
        />

        {/* edge vignette — match map bg #05050d */}
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <div className="absolute inset-x-0 top-0"    style={{ height: 90, background: 'linear-gradient(to bottom, #05050d, transparent)' }} />
          <div className="absolute inset-x-0 bottom-0" style={{ height: 90, background: 'linear-gradient(to top,    #05050d, transparent)' }} />
          <div className="absolute inset-y-0 left-0"   style={{ width:  80, background: 'linear-gradient(to right,  #05050d, transparent)' }} />
          <div className="absolute inset-y-0 right-0"  style={{ width:  80, background: 'linear-gradient(to left,   #05050d, transparent)' }} />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="relative z-[3] w-full block"
          style={{ height: 'clamp(200px, 42vw, 480px)' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="gr-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="gr-glow2" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="7" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {ALL_DOTS.map((d, i) =>
            d.land ? (
              <circle key={i} cx={d.x} cy={d.y} r={2.4} fill="rgba(130,148,210,0.55)" />
            ) : (
              <circle key={i} cx={d.x} cy={d.y} r={1.4} fill="rgba(60,70,120,0.13)" />
            )
          )}

          {CONNECTIONS.map(([fn, tn], i) => {
            const from = CITY_MAP[fn], to = CITY_MAP[tn]
            if (!from || !to) return null
            return (
              <motion.path
                key={i}
                d={arcPath(from, to)}
                fill="none"
                stroke="#3ab4f5"
                strokeWidth={1.8}
                strokeLinecap="round"
                filter="url(#gr-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.85 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 2.4, delay: 0.3 + i * 0.3, ease: 'easeInOut' }}
              />
            )
          })}

          {CITIES.map((city, i) => (
            <motion.g
              key={i}
              transform={`translate(${city.x.toFixed(1)}, ${city.y.toFixed(1)})`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              <motion.circle cx={0} cy={0} fill="none" stroke="#3ab4f5" strokeWidth={1.2}
                animate={{ r: [4, 20], opacity: [0.8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45, ease: 'easeOut' }}
              />
              <motion.circle cx={0} cy={0} fill="none" stroke="#3ab4f5" strokeWidth={0.8}
                animate={{ r: [4, 28], opacity: [0.35, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45 + 0.9, ease: 'easeOut' }}
              />
              <circle cx={0} cy={0} r={6}   fill="#3ab4f5" opacity={0.18} filter="url(#gr-glow2)" />
              <circle cx={0} cy={0} r={4.5} fill="#3ab4f5" opacity={0.92} filter="url(#gr-glow)"  />
              <circle cx={0} cy={0} r={2}   fill="white" />
            </motion.g>
          ))}
        </svg>

        {/* City labels — desktop only */}
        <div className="hidden sm:block absolute inset-0 z-[4] pointer-events-none">
          {CITIES.map((city, i) => (
            <motion.div
              key={i}
              className="absolute text-[10px] font-bold tracking-wide text-white/50 whitespace-nowrap"
              style={{ left: `${(city.x / W) * 100}%`, top: `${(city.y / H) * 100}%`, transform: 'translate(-50%, -220%)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.14 }}
            >
              {city.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
