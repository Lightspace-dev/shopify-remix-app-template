import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      spacing: {
        xxs: '8px',
        xs: '12px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '56px',
      },
    },
  },
  plugins: [],
} satisfies Config
