import type { Metadata } from 'next'
import { Archivo, Hanken_Grotesk, Roboto_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Sandeep Nayak — Creative Agency',
  description: 'Crafting experiences that inspire. Elevate your brand with creative magic.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Runs before React hydration — sets data-theme from localStorage to avoid flash */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})()` }} />
      </head>
      <body className={`${archivo.variable} ${hanken.variable} ${robotoMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
}
