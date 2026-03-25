import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E6F9F',
          50: '#E8F2F9',
          100: '#D1E5F3',
          200: '#A3CBEA',
          300: '#75B1E0',
          400: '#4797D7',
          500: '#1E6F9F',
          600: '#185A82',
          700: '#124465',
          800: '#0C2F48',
          900: '#061A2B',
        },
        secondary: {
          DEFAULT: '#2D2D2D',
          50: '#F5F5F5',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#2D2D2D',
          600: '#262626',
          700: '#1F1F1F',
          800: '#191919',
          900: '#121212',
        },
        accent: {
          DEFAULT: '#FF6B35',
          50: '#FFF5F0',
          100: '#FFEBE0',
          200: '#FFD6C2',
          300: '#FFC2A3',
          400: '#FFAD85',
          500: '#FF6B35',
          600: '#E65A2A',
          700: '#CC4920',
          800: '#B33815',
          900: '#99270B',
        },
        neutral: {
          DEFAULT: '#F5E9D4',
          50: '#FEFCF8',
          100: '#FCF8F1',
          200: '#F9F1E3',
          300: '#F6EAD5',
          400: '#F3E3C7',
          500: '#F5E9D4',
          600: '#E8DBC1',
          700: '#DBCDAE',
          800: '#CEBF9B',
          900: '#C1B188',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #1E6F9F 0%, #2D2D2D 50%, #FF6B35 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(30, 111, 159, 0.1) 0%, rgba(45, 45, 45, 0.05) 100%)',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'premium-lg': '0 30px 90px rgba(0, 0, 0, 0.2)',
        'premium-xl': '0 40px 120px rgba(0, 0, 0, 0.25)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(30, 111, 159, 0.3)',
        'glow-accent': '0 0 20px rgba(255, 107, 53, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config