import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0eaff',
          200: '#c1d5ff',
          300: '#93b4ff',
          400: '#5e8aff',
          500: '#3b63f7',
          600: '#2244eb',
          700: '#1a33d3',
          800: '#1b2cab',
          900: '#1c2a87',
          950: '#141a52',
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea6c10',
        },
        dark: {
          900: '#080b14',
          800: '#0d1222',
          700: '#111827',
          600: '#1a2235',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59,99,247,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59,99,247,0.7)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
