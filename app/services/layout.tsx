import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — App, Web & AI Development',
  description:
    'Explore Bloom Stack\'s full range of services: mobile app development, web development, UI/UX design, backend & cloud engineering, and AI & automation. End-to-end digital solutions for startups and businesses.',
  alternates: { canonical: 'https://bloomstack.in/services' },
  keywords: [
    'app development services',
    'web development services India',
    'UI UX design services',
    'AI development services',
    'mobile app development company',
    'SaaS development agency',
    'Next.js development services',
    'React Native app development',
    'backend development India',
    'Bloom Stack services',
  ],
  openGraph: {
    title: 'Services | Bloom Stack — App, Web & AI Development',
    description:
      'Mobile apps, websites, SaaS platforms, AI solutions, and UI/UX design — everything your product needs under one roof.',
    url: 'https://bloomstack.in/services',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Services | Bloom Stack — App, Web & AI Development',
    description:
      'Mobile apps, websites, SaaS platforms, AI solutions, and UI/UX design — everything your product needs under one roof.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bloomstack.in' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bloomstack.in/services' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
