'use client'
import * as React from 'react'
import DottedMapLib from 'dotted-map'

export interface Marker {
  lat: number
  lng: number
  size?: number
  color?: string
}

interface DottedMapProps<M extends Marker = Marker> {
  markers?: M[]
  renderMarkerOverlay?: (args: {
    marker: M
    x: number
    y: number
    r: number
    index: number
  }) => React.ReactNode
  mapColor?: string
  dotSize?: number
  dotSpacing?: number
  svgProps?: React.SVGProps<SVGSVGElement>
}

export function DottedMap<M extends Marker = Marker>({
  markers = [],
  renderMarkerOverlay,
  mapColor = 'rgba(255,255,255,0.18)',
  dotSize = 0.35,
  dotSpacing = 35,
  svgProps = {},
}: DottedMapProps<M>) {
  const { svg, viewBox, positions } = React.useMemo(() => {
    const map = new DottedMapLib({ height: dotSpacing, grid: 'diagonal' })

    // add a uniquely-coloured invisible pin per marker to extract its SVG coords
    const PROBE = markers.map((_, i) => {
      const hex = `#${String(i + 1).padStart(6, '0')}`
      return hex
    })
    markers.forEach((m, i) => {
      map.addPin({ lat: m.lat, lng: m.lng, svgOptions: { color: PROBE[i], radius: 0.01 } })
    })

    const raw = map.getSVG({
      radius: dotSize,
      color: mapColor,
      shape: 'circle',
      backgroundColor: 'transparent',
    })

    const vbMatch = raw.match(/viewBox="([^"]+)"/)
    const viewBox = vbMatch ? vbMatch[1] : '0 0 69 35'

    // extract exact cx/cy for each probe colour
    const positions = PROBE.map(hex => {
      const re = new RegExp(`<circle cx="([\\d.]+)" cy="([\\d.]+)" r="[\\d.]+" fill="${hex.replace('#', '\\#')}"`)
      const m = raw.match(re)
      return m ? { x: parseFloat(m[1]), y: parseFloat(m[2]) } : { x: 0, y: 0 }
    })

    // strip probe circles from the final SVG
    let clean = raw
    PROBE.forEach(hex => {
      clean = clean.replace(
        new RegExp(`<circle cx="[\\d.]+" cy="[\\d.]+" r="[\\d.]+" fill="${hex.replace('#', '\\#')}"\\s*/>`, 'g'),
        ''
      )
    })

    return { svg: clean, viewBox, positions }
  }, [markers, dotSize, dotSpacing, mapColor])

  // r is scaled to the tiny viewBox (≈69×35 units)
  const markerR = (size = 2) => size * 0.38

  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      {...svgProps}
    >
      <g dangerouslySetInnerHTML={{ __html: svg.replace(/<\/?svg[^>]*>/g, '') }} />

      {markers.map((m, i) => {
        const { x, y } = positions[i]
        const r = markerR(m.size)
        return (
          <g key={i}>
            {renderMarkerOverlay
              ? renderMarkerOverlay({ marker: m, x, y, r, index: i })
              : (
                <>
                  <circle cx={x} cy={y} r={r * 2.2} fill="rgba(108,43,217,0.12)" />
                  <circle cx={x} cy={y} r={r * 1.4} fill="rgba(108,43,217,0.22)" />
                  <circle cx={x} cy={y} r={r}       fill={m.color ?? '#6C2BD9'} />
                </>
              )
            }
          </g>
        )
      })}
    </svg>
  )
}
