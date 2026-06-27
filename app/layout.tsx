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

const SITE_URL = 'https://bloomstack.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Bloom Stack | App Development, Web Development & AI Solutions',
    template: '%s | Bloom Stack',
  },
  description:
    'Bloom Stack is a full-service digital agency in Bhubaneswar, India. We build high-performance mobile apps, modern websites, SaaS platforms, and AI-powered solutions for startups and businesses worldwide.',
  keywords: [
    'app development company India',
    'web development agency Bhubaneswar',
    'mobile app development',
    'AI solutions for businesses',
    'React Next.js development',
    'UI UX design agency',
    'SaaS development India',
    'startup software agency',
    'Flutter app development',
    'full stack development company',
    'Bloom Stack',
    'software agency Odisha',
    'hire app developers India',
    'custom web application development',
    'AI automation services',
  ],
  authors: [{ name: 'Bloom Stack', url: SITE_URL }],
  creator: 'Bloom Stack',
  publisher: 'Bloom Stack',
  category: 'Technology',
  alternates: { canonical: SITE_URL },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Bloom Stack',
    title: 'Bloom Stack | App Development, Web Development & AI Solutions',
    description:
      'Full-service digital agency building mobile apps, websites, and AI solutions for startups and businesses. Based in India, working worldwide.',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bloom Stack — App Development, Web Development & AI Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bloom Stack | App Development, Web Development & AI Solutions',
    description:
      'Full-service digital agency building mobile apps, websites, and AI solutions for startups and businesses.',
    images: ['/images/og-image.png'],
    creator: '@bloomstack',
    site: '@bloomstack',
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'add-your-google-search-console-token-here',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* ── Organization ── */
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Bloom Stack',
      alternateName: 'BloomStack',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        '@id': `${SITE_URL}/#logo`,
        url: `${SITE_URL}/images/fevicon.png`,
        contentUrl: `${SITE_URL}/images/fevicon.png`,
        width: 512,
        height: 512,
        caption: 'Bloom Stack',
      },
      image: `${SITE_URL}/images/og-image.png`,
      description:
        'Bloom Stack is a full-service digital agency building mobile apps, modern websites, SaaS platforms, and AI-powered solutions for startups and businesses.',
      foundingDate: '2021',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 3 },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bhubaneswar',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        postalCode: '751001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 20.2961,
        longitude: 85.8245,
      },
      areaServed: ['IN', 'US', 'GB', 'AU', 'CA', 'AE'],
      priceRange: '$$',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          url: `${SITE_URL}/contact`,
          availableLanguage: ['English', 'Hindi', 'Odia'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: `${SITE_URL}/contact`,
        },
      ],
      sameAs: [
        'https://www.linkedin.com/in/sandeep-nayak-0547461a9',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Native iOS and Android apps, cross-platform React Native and Flutter apps for startups and businesses.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description:
                'Custom websites, SaaS platforms, dashboards, and landing pages built with Next.js, React, and Node.js.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'UI/UX Design',
              description:
                'User research, wireframing, prototyping, and pixel-perfect UI design in Figma with dev-ready handoff.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI & Automation Solutions',
              description:
                'AI chatbots, ML integrations, data pipelines, and workflow automation to make your product smarter.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Backend & Cloud Development',
              description:
                'Scalable REST and GraphQL APIs, database design, auth, cloud deployment on AWS, GCP, and Vercel.',
            },
          },
        ],
      },
    },

    /* ── WebSite ── */
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Bloom Stack',
      description: 'App Development, Web Development & AI Solutions',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },

    /* ── WebPage (Home) ── */
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Bloom Stack | App Development, Web Development & AI Solutions',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      description:
        'We build high-performance mobile apps, modern websites, and intelligent AI solutions for startups and businesses.',
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        ],
      },
    },

    /* ── FAQ ── */
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Bloom Stack offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bloom Stack offers mobile app development (iOS, Android, React Native, Flutter), web development (Next.js, SaaS, dashboards), UI/UX design, backend & cloud development, and AI & automation solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a mobile app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A simple marketing website takes 2–4 weeks. A mid-size web or mobile app typically runs 6–12 weeks depending on feature complexity. Large SaaS or multi-platform products are scoped individually.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with startups?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We specialise in working with early-stage startups — from MVP to full scale. We adapt our process to fit your stage and budget.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does Bloom Stack use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use React, Next.js, TypeScript, Tailwind CSS for frontend; React Native and Flutter for mobile; Node.js, Python, PostgreSQL for backend; AWS, Vercel, Firebase for cloud; and Figma for design.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is pricing structured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work on fixed-scope project pricing or monthly retainers. All pricing is transparent with no hidden fees. We require a 40% deposit to begin work with the balance split across milestones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I own the code after the project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — 100%. Upon final payment, all source code, design files, and assets are transferred to you with no licensing restrictions.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Runs before React hydration — sets data-theme from localStorage to avoid flash */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})()` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
