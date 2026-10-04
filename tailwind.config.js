/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          accent: '#B9F53B',
          hover: '#A5EC22',
          glow: 'rgba(185, 245, 59, 0.4)',
          light: '#E8FCCC',
          dark: '#1C2908',
        },
        surface: {
          base: '#ECEEF1',
          soft: '#F4F5F7',
          card: '#FFFFFF',
          elevated: '#F9FAFB',
          dark: '#111419',
          darker: '#0A0C0F',
        },
        neutral: {
          950: '#0B0D11',
          900: '#14171E',
          800: '#232733',
          700: '#3A4050',
          600: '#5A6275',
          500: '#7B849B',
          400: '#9DA7BF',
          300: '#CBD2E1',
          200: '#E1E5EF',
          100: '#F0F2F7',
          50: '#F8F9FC',
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(18, 24, 38, 0.04), 0 1px 4px -1px rgba(18, 24, 38, 0.02)',
        'soft-md': '0 8px 24px -4px rgba(18, 24, 38, 0.06), 0 4px 12px -2px rgba(18, 24, 38, 0.03)',
        'soft-xl': '0 20px 48px -8px rgba(18, 24, 38, 0.08), 0 10px 20px -4px rgba(18, 24, 38, 0.04)',
        'lime-glow': '0 0 35px rgba(185, 245, 59, 0.35)',
        'card-glow': '0 20px 50px -10px rgba(0, 0, 0, 0.07)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        radarSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'radar': 'radarSpin 25s linear infinite',
      }
    },
  },
  plugins: [],
}
