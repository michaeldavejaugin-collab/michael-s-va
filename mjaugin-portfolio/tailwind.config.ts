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
        navy: {
          DEFAULT: '#0F172A',
          50: '#f0f4ff',
          100: '#dce6ff',
          200: '#b8ccff',
          300: '#84a3ff',
          400: '#496eff',
          500: '#1e3aff',
          600: '#0017ff',
          700: '#0017e6',
          800: '#0013b8',
          900: '#0F172A',
          950: '#070d1a',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#fdf9e7',
          100: '#faf0c0',
          200: '#f4de7c',
          300: '#ecc940',
          400: '#D4AF37',
          500: '#b8921f',
          600: '#956f18',
          700: '#6e5018',
          800: '#5c421a',
          900: '#4e381b',
        },
        charcoal: '#111827',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #D4AF37 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0F172A 0%, #1e2d4a 100%)',
        'hero-pattern': "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(30,58,138,0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
}

export default config
