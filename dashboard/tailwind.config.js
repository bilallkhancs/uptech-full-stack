/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0A0A0F',
          900: '#111118',
          800: '#1A1A24',
          700: '#25252F',
          600: '#32323E',
          500: '#4A4A5A',
          400: '#6B6B80',
          300: '#9090A8',
          200: '#C0C0D0',
          100: '#E8E8F0',
        },
        volt: {
          DEFAULT: '#C8FF00',
          dim: '#A0CC00',
          glow: 'rgba(200,255,0,0.15)',
        },
        coral: '#FF5F5F',
        sky: '#5FB8FF',
        mint: '#5FFFB8',
      },
      boxShadow: {
        volt: '0 0 20px rgba(200,255,0,0.2)',
        card: '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
}
