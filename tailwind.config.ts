import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '4point-orange': '#FF6B35',
        'matte-black': '#1A1A1A',
        'matte-gray': '#2A2A2A',
        'sunset-orange': {
          DEFAULT: '#FF6B35',
          50: '#fff3ee',
          100: '#ffe4d5',
          200: '#fec8ab',
          300: '#fca277',
          400: '#fa6f33',
          500: '#f54a0a',
          600: '#e53200',
          700: '#bf2200',
          800: '#981e09',
          900: '#7a1c0b',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        figtree: ['var(--font-figtree)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
