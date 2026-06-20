import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, duration = 1700) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  const start = () => {
    if (started.current) return
    started.current = true
    const begin = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - begin) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return { count, start }
}
