import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime:    '#C5F23C',
        purple:  '#6C2BD9',
        'purple-light': '#B99DFF',
        dark:    'var(--dark)',
        panel:   'var(--panel)',
        card:    'var(--card)',
        elevated:'var(--elevated)',
        muted:   'var(--muted)',
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'sans-serif'],
        inter:   ['var(--font-inter)', 'sans-serif'],
        mono:    ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
