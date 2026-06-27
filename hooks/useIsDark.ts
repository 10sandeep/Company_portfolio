import { useState, useEffect } from 'react'

export function useIsDark() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const el = document.documentElement
    const check = () => setIsDark(el.getAttribute('data-theme') !== 'light')
    check()
    const obs = new MutationObserver(check)
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  return isDark
}
