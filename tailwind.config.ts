import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1628',
        surface: '#1E2D45',
        accent: '#C9A84C',
        'text-primary': '#F0F4F8',
        'text-muted': '#8B9CB6',
        border: '#2D4166',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
