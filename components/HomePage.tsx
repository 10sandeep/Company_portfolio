'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Stats         from '@/components/Stats'
import Expertise     from '@/components/Expertise'
import WhatWeDo      from '@/components/WhatWeDo'
import RecentWork    from '@/components/RecentWork'
import ProjectOverlay from '@/components/ProjectOverlay'
import TechStack     from '@/components/TechStack'
import LogoWall      from '@/components/LogoWall'
import Contact       from '@/components/Contact'
import CTASection    from '@/components/CTASection'
import GlobalReach   from '@/components/GlobalReach'
import Footer        from '@/components/Footer'
import { PROJECTS }  from '@/lib/projects'
import PageCurtain   from '@/components/PageCurtain'
import ScrollToTop   from '@/components/ScrollToTop'
import AboutOverlay   from '@/components/AboutOverlay'
import ProductsOverlay from '@/components/ProductsOverlay'
import FAQOverlay     from '@/components/FAQOverlay'
import { TracingBeam } from '@/components/ui/tracing-beam'

type Overlay = 'about' | 'products' | 'faq' | null

function overlayFromPath(path: string): Overlay {
  if (path === '/about')    return 'about'
  if (path === '/products') return 'products'
  if (path === '/faq')      return 'faq'
  return null
}

export default function HomePage() {
  const [activeKey,    setActiveKey]    = useState<string | null>(null)
  const [showAbout,    setShowAbout]    = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [showFAQ,      setShowFAQ]      = useState(false)

  const activeProject = activeKey ? PROJECTS[activeKey] : null

  /* ── sync overlays with URL on mount + back/forward ── */
  useEffect(() => {
    const sync = (path: string) => {
      const overlay = overlayFromPath(path)
      setShowAbout(overlay === 'about')
      setShowProducts(overlay === 'products')
      setShowFAQ(overlay === 'faq')
      document.body.style.overflow = overlay ? 'hidden' : ''
    }

    sync(window.location.pathname)

    const onPop = () => sync(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  /* ── scroll restore on fresh load ── */
  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
    const isReload = nav?.type === 'reload'
    if (isReload) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'auto'
    } else {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [])

  /* ── helpers ── */
  const openProject  = (key: string) => { setActiveKey(key); document.body.style.overflow = 'hidden' }
  const closeProject = ()             => { setActiveKey(null); document.body.style.overflow = '' }

  const openAbout = () => {
    setShowAbout(true)
    document.body.style.overflow = 'hidden'
    window.history.pushState({}, '', '/about')
  }
  const closeAbout = () => {
    setShowAbout(false)
    document.body.style.overflow = ''
    window.history.pushState({}, '', '/')
  }

  const openProducts = () => {
    setShowProducts(true)
    document.body.style.overflow = 'hidden'
    window.history.pushState({}, '', '/products')
  }
  const closeProducts = () => {
    setShowProducts(false)
    document.body.style.overflow = ''
    window.history.pushState({}, '', '/')
  }

  const openFAQ = () => {
    setShowFAQ(true)
    document.body.style.overflow = 'hidden'
    window.history.pushState({}, '', '/faq')
  }
  const closeFAQ = () => {
    setShowFAQ(false)
    document.body.style.overflow = ''
    window.history.pushState({}, '', '/')
  }

  return (
    <main>
      <PageCurtain />
      <Navbar onOpenAbout={openAbout} onOpenProducts={openProducts} onOpenFAQ={openFAQ} />
      <Hero />
      <TechStack />
      <Stats />
      <Expertise />
      <TracingBeam>
        <WhatWeDo />
        <RecentWork onOpen={openProject} onOpenProducts={openProducts} />
      </TracingBeam>
      {/* <LogoWall /> */}
      <Contact />
      <CTASection />
      {/* <GlobalReach /> */}
      <motion.div
        initial={{ y: 100, scale: 0.94, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'linear-gradient(to bottom, #0f0338 0%, #2d0a8a 22%, #5b21b6 48%, #7c3aed 68%, #9d6eea 85%, #b49ee8 100%)',
          paddingTop: '80px',
          transformOrigin: 'bottom center',
        }}
      >
        <Footer onOpenAbout={openAbout} onOpenProducts={openProducts} onOpenFAQ={openFAQ} />
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 sm:px-[clamp(20px,5vw,84px)] pb-10 pt-8 max-w-[1148px] mx-auto">
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            © {new Date().getFullYear()} Sandeep Nayak. All Rights Reserved.
          </span>
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            Bhubaneswar, Odisha, India
          </span>
        </div>
      </motion.div>
      {activeProject && (
        <ProjectOverlay project={activeProject} onClose={closeProject} />
      )}
      {showAbout    && <AboutOverlay    onClose={closeAbout}    />}
      {showProducts && <ProductsOverlay onClose={closeProducts} />}
      {showFAQ      && <FAQOverlay      onClose={closeFAQ}      />}
      <ScrollToTop />
    </main>
  )
}
