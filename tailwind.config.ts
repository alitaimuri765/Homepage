import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        purple: { DEFAULT: '#8a07f1', dark: '#6b05c0' },
        green: { accent: '#339657' },
      },
      borderRadius: {
        'pill': '87px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(98.63deg, #000000 -11.39%, #2B2B2B 49.52%, #8A07F1 155.77%, #CBCBCB 217.3%)',
      },
    },
  },
  plugins: [],
}

export default config
