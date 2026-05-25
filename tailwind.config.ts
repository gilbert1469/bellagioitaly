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
        'warm-white': '#FAF8F4',
        'slate-deep': '#1C2B35',
        gold: '#B8966E',
        'gold-light': '#D4B896',
        'gold-dark': '#9A7A58',
        cream: '#F5F0E8',
        muted: '#475569',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Garamond', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
