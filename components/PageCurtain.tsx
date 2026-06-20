'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function PageCurtain() {
  useEffect(() => {
    const el = document.getElementById('page-curtain')
    if (!el) return

    const tl = gsap.timeline()
    tl.to(el, {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1.1,
      ease: 'power4.inOut',
      delay: 0.2,
      onComplete: () => { el.style.display = 'none' },
    })
  }, [])

  return (
    <div
      id="page-curtain"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(160deg, #6C2BD9 0%, #0A0A0B 80%)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  )
}
