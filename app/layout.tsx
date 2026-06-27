import type { Metadata } from 'next'
import { Archivo, Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import { StickyBanner } from '@/components/ui/sticky-banner'
import SmoothScroll from '@/components/SmoothScroll'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Sandeep Nayak — Creative Agency',
  description: 'Crafting experiences that inspire. Elevate your brand with creative magic.',
  icons: {
    icon: [
      { url: '/images/fevicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/fevicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/images/fevicon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/images/fevicon.png',
    apple: { url: '/images/fevicon.png', sizes: '180x180' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Runs before React hydration — sets data-theme from localStorage to avoid flash */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})()` }} />
      </head>
      <body className={`${archivo.variable} ${inter.variable} ${robotoMono.variable} font-inter`} style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <StickyBanner className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6]">
          <p className="text-white text-xs sm:text-sm font-medium drop-shadow-md">
            🚀 We&apos;re now accepting new projects for Q3 2025.{' '}
            <a href="/contact" className="underline underline-offset-2 hover:no-underline font-semibold">
              Let&apos;s talk →
            </a>
          </p>
        </StickyBanner>
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
