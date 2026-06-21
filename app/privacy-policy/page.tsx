'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const SECTIONS = [
  {
    title: 'Introduction',
    body: `Welcome to Sandeep Nayak ("we", "our", or "us"). We are a creative agency based in Bhubaneswar, Odisha, India, specialising in app development, web development, and UI/UX design. This Privacy & Cookie Policy explains how we collect, use, and protect information when you visit our website or engage with our services. By using our website, you agree to the practices described in this policy.`,
  },
  {
    title: 'Information We Collect',
    body: `We may collect the following types of information:\n\n**Contact Information** — When you fill out our contact form, we collect your name, email address, phone number, and any message you choose to send us.\n\n**Usage Data** — We automatically collect certain technical information such as your IP address, browser type, device type, pages visited, and time spent on each page. This data helps us improve the website experience.\n\n**Cookie Data** — We use cookies and similar tracking technologies to enhance functionality and understand how visitors interact with our site. See the Cookies section below for full details.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to:\n\n• Respond to your enquiries and project requests\n• Improve and optimise our website and services\n• Send occasional updates or newsletters if you have opted in\n• Comply with legal obligations\n• Analyse trends and usage patterns to better serve our audience\n\nWe do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: 'Cookies & Tracking',
    body: `Cookies are small text files stored on your device when you visit our website. We use the following categories of cookies:\n\n**Essential Cookies** — Required for the website to function correctly (e.g., theme preference). These cannot be disabled.\n\n**Analytics Cookies** — Help us understand how visitors navigate the site so we can improve it. We may use tools such as Google Analytics for this purpose.\n\n**Performance Cookies** — Used to optimise loading times and overall site performance.\n\nYou can control cookie preferences through your browser settings at any time. Disabling certain cookies may affect the functionality of the website.`,
  },
  {
    title: 'Third-Party Services',
    body: `We may use third-party tools and services including:\n\n• **Google Analytics** — for website traffic analysis\n• **Vercel** — for hosting and edge delivery\n• **Email service providers** — to handle contact form submissions\n\nThese third parties have their own privacy policies. We encourage you to review them. We are not responsible for the privacy practices of third-party services.`,
  },
  {
    title: 'Data Retention',
    body: `We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law. Contact form submissions are retained for up to 12 months unless you request earlier deletion.`,
  },
  {
    title: 'Data Security',
    body: `We take reasonable technical and organisational measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.`,
  },
  {
    title: 'Your Rights',
    body: `Depending on your location, you may have the following rights regarding your personal data:\n\n• **Access** — Request a copy of the personal data we hold about you\n• **Correction** — Ask us to correct inaccurate or incomplete information\n• **Deletion** — Request that we delete your personal data\n• **Objection** — Object to how we process your data\n• **Portability** — Request your data in a portable format\n\nTo exercise any of these rights, please contact us at the details below. We will respond within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `Our website is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal information, please contact us immediately and we will take steps to delete such information.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy & Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The "Last Updated" date at the top of this page will reflect any changes. We encourage you to review this page periodically. Continued use of our website after updates constitutes your acceptance of the revised policy.`,
  },
  {
    title: 'Contact Us',
    body: `If you have any questions, concerns, or requests relating to this Privacy & Cookie Policy, please get in touch:\n\n**Sandeep Nayak**\nBhubaneswar, Odisha, India\nPhone: +91 8456834944\nEmail: sandeepnayak1724@gmail.com`,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
}

function renderBody(text: string) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    // bold: **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={i} className="m-0 mb-[6px] last:mb-0">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="text-white font-semibold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    )
  })
}

export default function PrivacyPolicy() {
  return (
    <main style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      {/* Sticky nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 h-[62px]"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[8px] no-underline">
          <span className="w-[22px] h-[22px] text-lime block">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              <rect x="22" y="22" width="56" height="56" rx="20" />
              <rect x="22" y="22" width="56" height="56" rx="20" transform="rotate(45 50 50)" />
            </svg>
          </span>
          <span className="font-archivo font-extrabold text-[17px] sm:text-[19px] text-lime">
            Sandeep Nayak
          </span>
        </Link>

        {/* Back button */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold no-underline px-4 py-[9px] rounded-full transition-colors"
          style={{
            color: 'var(--text-nav)',
            border: '1px solid var(--border)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="11 18 5 12 11 6" />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <motion.div
        className="max-w-[780px] mx-auto px-5 sm:px-7 pt-16 sm:pt-24 pb-10 sm:pb-14"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[11px] font-bold tracking-[2.5px] uppercase text-lime mb-4 m-0">
          Legal
        </p>
        <h1
          className="font-archivo font-black uppercase m-0 text-white leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}
        >
          Privacy &amp; Cookie Policy
        </h1>
        <p className="text-sm mt-4 m-0" style={{ color: 'var(--muted)' }}>
          Last updated: June 2025
        </p>

        <div className="h-px mt-10" style={{ background: 'rgba(255,255,255,0.07)' }} />
      </motion.div>

      {/* Sections */}
      <div className="max-w-[780px] mx-auto px-5 sm:px-7 pb-24">
        {SECTIONS.map((sec, i) => (
          <motion.div
            key={i}
            className="mb-10 sm:mb-12"
            {...fadeUp}
            transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-archivo font-bold text-white m-0 mb-3"
              style={{ fontSize: 'clamp(17px, 2.2vw, 22px)' }}
            >
              {i + 1}. {sec.title}
            </h2>
            <div
              className="text-sm leading-[1.75]"
              style={{ color: 'var(--text-body)' }}
            >
              {renderBody(sec.body)}
            </div>
          </motion.div>
        ))}

        <div className="h-px mt-6 mb-10" style={{ background: 'rgba(255,255,255,0.07)' }} />

        {/* Bottom nav */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors"
            style={{ color: 'var(--lime)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="11 18 5 12 11 6" />
            </svg>
            Back to Home
          </Link>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            Sandeep Nayak © {new Date().getFullYear()}
          </span>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        background: 'linear-gradient(to bottom, #0f0338 0%, #2d0a8a 22%, #5b21b6 48%, #7c3aed 68%, #9d6eea 85%, #b49ee8 100%)',
        paddingTop: '52px',
      }}>
        <Footer />
        <div className="flex items-center justify-between flex-wrap gap-4 px-5 sm:px-[clamp(20px,5vw,84px)] pb-10 pt-8 max-w-[1148px] mx-auto">
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            © {new Date().getFullYear()} Sandeep Nayak. All Rights Reserved.
          </span>
          <span className="text-sm font-bold tracking-[1.8px] uppercase" style={{ color: 'rgba(0,0,0,0.75)' }}>
            Bhubaneswar, Odisha, India
          </span>
        </div>
      </div>
    </main>
  )
}
