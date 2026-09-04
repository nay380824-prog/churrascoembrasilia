import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './*/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#047232',
          red: '#ac1f18',
          yellow: '#c2b904',
          gold: '#c9b35f',
          cream: '#f5efe3',
          ink: '#0b0a08',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Readex Pro"', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
