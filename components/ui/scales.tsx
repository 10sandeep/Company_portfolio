interface ScalesProps {
  size?: number
  className?: string
}

export function Scales({ size = 8, className = '' }: ScalesProps) {
  const id = `scales-${size}`
  const s = size
  const r = s / 2

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width={s}
          height={s}
          patternUnits="userSpaceOnUse"
        >
          {/* two offset rows of arcs to create fish-scale effect */}
          <path
            d={`M 0 ${s} Q ${r} 0 ${s} ${s}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <path
            d={`M ${-r} ${s} Q ${0} 0 ${r} ${s}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <path
            d={`M ${r} ${s} Q ${s} 0 ${s * 1.5} ${s}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.35"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
