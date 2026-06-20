'use client'
import { useState, useEffect } from 'react'
import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Expertise    from '@/components/Expertise'
import Statement    from '@/components/Statement'
import RecentWork   from '@/components/RecentWork'
import ProjectOverlay from '@/components/ProjectOverlay'
import TechStack    from '@/components/TechStack'
import LogoWall     from '@/components/LogoWall'
import Contact      from '@/components/Contact'
import CTASection   from '@/components/CTASection'
import Footer       from '@/components/Footer'
import { PROJECTS } from '@/lib/projects'
import PageCurtain     from '@/components/PageCurtain'
import AboutOverlay   from '@/components/AboutOverlay'
import ProductsOverlay from '@/components/ProductsOverlay'
import FAQOverlay      from '@/components/FAQOverlay'

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  const [activeKey, setActiveKey]       = useState<string | null>(null)
  const [showAbout, setShowAbout]       = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const [showFAQ,      setShowFAQ]      = useState(false)
  const activeProject = activeKey ? PROJECTS[activeKey] : null

  const openProject   = (key: string) => { setActiveKey(key);        document.body.style.overflow = 'hidden' }
  const closeProject  = () =>            { setActiveKey(null);        document.body.style.overflow = '' }
  const openAbout     = () =>            { setShowAbout(true);        document.body.style.overflow = 'hidden' }
  const closeAbout    = () =>            { setShowAbout(false);       document.body.style.overflow = '' }
  const openProducts  = () =>            { setShowProducts(true);     document.body.style.overflow = 'hidden' }
  const closeProducts = () =>            { setShowProducts(false);    document.body.style.overflow = '' }
  const openFAQ       = () =>            { setShowFAQ(true);          document.body.style.overflow = 'hidden' }
  const closeFAQ      = () =>            { setShowFAQ(false);         document.body.style.overflow = '' }

  return (
    <main>
      <PageCurtain />
      <Navbar onOpenAbout={openAbout} onOpenProducts={openProducts} onOpenFAQ={openFAQ} />
      <Hero />
      <TechStack />
      <Expertise />
      <Statement />
      <RecentWork onOpen={openProject} />
      <LogoWall />
      <Contact />
      <CTASection />
      <Footer />
      {activeProject && (
        <ProjectOverlay project={activeProject} onClose={closeProject} />
      )}
      {showAbout    && <AboutOverlay    onClose={closeAbout}    />}
      {showProducts && <ProductsOverlay onClose={closeProducts} />}
      {showFAQ      && <FAQOverlay      onClose={closeFAQ}      />}
    </main>
  )
}
