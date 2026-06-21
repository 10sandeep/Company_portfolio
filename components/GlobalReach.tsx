'use client'
import { motion } from 'framer-motion'

const W = 1000
const H = 460

function ll(lon: number, lat: number): [number, number] {
  return [((lon + 180) / 360) * W, ((90 - lat) / 180) * H]
}

function pip(px: number, py: number, poly: [number, number][]): boolean {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j]
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }
  return inside
}

const CONTINENTS: [number, number][][] = [
  // North America
  [ll(-168,72),ll(-140,68),ll(-55,72),ll(-52,48),ll(-65,44),ll(-82,25),ll(-87,16),ll(-92,16),ll(-105,22),ll(-120,30),ll(-135,58),ll(-160,60),ll(-168,66)],
  // South America
  [ll(-82,10),ll(-62,10),ll(-35,-4),ll(-35,-10),ll(-50,-34),ll(-65,-56),ll(-68,-54),ll(-75,-45),ll(-78,-3),ll(-77,8)],
  // Europe
  [ll(-10,36),ll(30,36),ll(40,46),ll(35,70),ll(15,72),ll(-5,64),ll(-10,48)],
  // Africa
  [ll(-18,38),ll(52,38),ll(52,12),ll(45,-12),ll(35,-36),ll(18,-36),ll(-18,-28),ll(-18,18)],
  // Asia
  [ll(26,70),ll(180,70),ll(180,0),ll(140,-10),ll(100,2),ll(100,20),ll(78,8),ll(62,25),ll(40,40),ll(26,70)],
  // Australia
  [ll(114,-22),ll(136,-12),ll(152,-22),ll(152,-28),ll(148,-38),ll(140,-38),ll(118,-34),ll(114,-28)],
  // Greenland
  [ll(-44,84),ll(-18,76),ll(-18,72),ll(-42,72),ll(-56,76),ll(-52,82)],
  // Scandinavia
  [ll(4,58),ll(28,58),ll(32,70),ll(20,72),ll(14,66),ll(4,58)],
  // UK
  [ll(-6,50),ll(2,51),ll(0,58),ll(-5,58),ll(-8,54)],
]

// All grid positions + land flag — computed once at module level
const DOT_SPACING = 10
const ALL_DOTS: { x: number; y: number; land: boolean }[] = []
for (let x = 0; x <= W; x += DOT_SPACING) {
  for (let y = 0; y <= H; y += DOT_SPACING) {
    ALL_DOTS.push({ x, y, land: CONTINENTS.some(p => pip(x, y, p)) })
  }
}

const CITIES = [
  { name: 'New York',   lon: -74.0, lat: 40.7 },
  { name: 'London',     lon: -0.1,  lat: 51.5 },
  { name: 'Dubai',      lon: 55.3,  lat: 25.2 },
  { name: 'Mumbai',     lon: 72.8,  lat: 19.1 },
  { name: 'Singapore',  lon: 103.8, lat: 1.3  },
  { name: 'Tokyo',      lon: 139.7, lat: 35.7 },
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

export default function GlobalReach() {
  return (
    <section className="py-14 sm:py-20 overflow-hidden" style={{ background: 'var(--dark)' }}>
      {/* Heading */}
      <motion.div
        className="text-center mb-10 sm:mb-14 px-5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-lime mb-4">
          Global Presence
        </p>
        <h2
          className="font-archivo font-black uppercase m-0 leading-tight"
          style={{ fontSize: 'clamp(32px,4.5vw,60px)' }}
        >
          <span className="text-white">Remote </span>
          <span style={{ color: 'rgba(255,255,255,0.22)' }}>Connectivity</span>
        </h2>
        <p className="text-sm text-muted max-w-[460px] mx-auto mt-4 leading-[1.65]">
          Break free from traditional boundaries. We collaborate with clients across the globe, delivering impactful digital experiences regardless of borders.
        </p>
      </motion.div>

      {/* Map card */}
      <motion.div
        className="relative mx-2 sm:mx-[14px] rounded-[28px] sm:rounded-[40px] overflow-hidden"
        style={{ background: '#05050d', border: '1px solid rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* dramatic centre-spotlight glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'radial-gradient(ellipse 72% 58% at 50% 54%, rgba(20,32,72,0.95) 0%, rgba(8,12,30,0.7) 45%, transparent 75%)',
          }}
        />

        {/* edge vignette fades — match card bg #05050d */}
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <div className="absolute inset-x-0 top-0" style={{ height: 90, background: 'linear-gradient(to bottom, #05050d, transparent)' }} />
          <div className="absolute inset-x-0 bottom-0" style={{ height: 90, background: 'linear-gradient(to top, #05050d, transparent)' }} />
          <div className="absolute inset-y-0 left-0" style={{ width: 80, background: 'linear-gradient(to right, #05050d, transparent)' }} />
          <div className="absolute inset-y-0 right-0" style={{ width: 80, background: 'linear-gradient(to left, #05050d, transparent)' }} />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="relative z-[3] w-full block"
          style={{ height: 'clamp(220px, 46vw, 500px)' }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* soft glow filter for arcs & city dots */}
            <filter id="gr-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* stronger glow for city cores */}
            <filter id="gr-glow2" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dotted world map — land dots bright, ocean dots barely-there */}
          {ALL_DOTS.map((d, i) =>
            d.land ? (
              <circle key={i} cx={d.x} cy={d.y} r={2.4} fill="rgba(130,148,210,0.55)" />
            ) : (
              <circle key={i} cx={d.x} cy={d.y} r={1.4} fill="rgba(60,70,120,0.13)" />
            )
          )}

          {/* Connection arcs */}
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

          {/* City dots */}
          {CITIES.map((city, i) => (
            <motion.g
              key={i}
              transform={`translate(${city.x.toFixed(1)}, ${city.y.toFixed(1)})`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              {/* pulse ring 1 */}
              <motion.circle
                cx={0} cy={0}
                fill="none"
                stroke="#3ab4f5"
                strokeWidth={1.2}
                animate={{ r: [4, 20], opacity: [0.8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45, ease: 'easeOut' }}
              />
              {/* pulse ring 2 */}
              <motion.circle
                cx={0} cy={0}
                fill="none"
                stroke="#3ab4f5"
                strokeWidth={0.8}
                animate={{ r: [4, 28], opacity: [0.35, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.45 + 0.9, ease: 'easeOut' }}
              />
              {/* glow halo */}
              <circle cx={0} cy={0} r={6} fill="#3ab4f5" opacity={0.18} filter="url(#gr-glow2)" />
              {/* outer dot */}
              <circle cx={0} cy={0} r={4.5} fill="#3ab4f5" opacity={0.92} filter="url(#gr-glow)" />
              {/* inner white core */}
              <circle cx={0} cy={0} r={2} fill="white" />
            </motion.g>
          ))}
        </svg>

        {/* City labels — desktop only */}
        <div className="hidden sm:block absolute inset-0 z-[4] pointer-events-none">
          {CITIES.map((city, i) => {
            const pctX = (city.x / W) * 100
            const pctY = (city.y / H) * 100
            return (
              <motion.div
                key={i}
                className="absolute text-[10px] font-bold tracking-wide text-white/50 whitespace-nowrap"
                style={{ left: `${pctX}%`, top: `${pctY}%`, transform: 'translate(-50%, -220%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.14 }}
              >
                {city.name}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
