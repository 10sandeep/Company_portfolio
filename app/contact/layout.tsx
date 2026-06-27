import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description:
    'Ready to build something great? Get in touch with Bloom Stack. We\'ll schedule a discovery call and send you a tailored proposal within 2–3 business days. Based in Bhubaneswar, India — working worldwide.',
  alternates: { canonical: 'https://bloomstack.in/contact' },
  keywords: [
    'contact Bloom Stack',
    'hire app developers India',
    'web development quote India',
    'start a project',
    'software agency contact',
    'app development inquiry',
    'get a free proposal',
    'digital agency Bhubaneswar',
  ],
  openGraph: {
    title: 'Contact Bloom Stack — Start Your Project',
    description:
      'Ready to build something great? Reach out and we\'ll send you a tailored proposal within 2–3 business days.',
    url: 'https://bloomstack.in/contact',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Contact Bloom Stack — Start Your Project',
    description:
      'Ready to build something great? Reach out and we\'ll send you a tailored proposal within 2–3 business days.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://bloomstack.in/contact' },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
