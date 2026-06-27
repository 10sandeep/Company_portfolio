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
  metadataBase: new URL('https://bloomstack.in'),

  title: {
    default: 'Bloom Stack — Apps, Websites & AI Solutions',
    template: '%s | Bloom Stack',
  },
  description:
    'Bloom Stack builds high-performance mobile apps, modern websites, and intelligent AI solutions for startups and businesses. From idea to launch — design, development, and strategy under one roof.',
  keywords: [
    'app development',
    'web development',
    'AI solutions',
    'mobile app development',
    'React',
    'Next.js',
    'UI UX design',
    'startup agency',
    'software agency India',
    'Bloom Stack',
  ],
  authors: [{ name: 'Bloom Stack', url: 'https://bloomstack.in' }],
  creator: 'Bloom Stack',
  publisher: 'Bloom Stack',

  openGraph: {
    type: 'website',
    url: 'https://bloomstack.in',
    siteName: 'Bloom Stack',
    title: 'Bloom Stack — Apps, Websites & AI Solutions',
    description:
      'We build high-performance mobile apps, modern websites, and intelligent AI solutions for startups and businesses.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bloom Stack — Apps, Websites & AI Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bloom Stack — Apps, Websites & AI Solutions',
    description:
      'We build high-performance mobile apps, modern websites, and intelligent AI solutions for startups and businesses.',
    images: ['/images/og-image.png'],
    creator: '@bloomstack',
  },

  icons: {
    icon: [
      { url: '/images/fevicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/fevicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/images/fevicon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/images/fevicon.png',
    apple: { url: '/images/fevicon.png', sizes: '180x180' },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
