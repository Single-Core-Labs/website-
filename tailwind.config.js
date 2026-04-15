/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          secondary: '#050505',
          tertiary: '#0A0A0A',
          surface: '#0F0F0F',
          surface2: '#1A1A1A',
        },
        accent: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          blue: '#2563EB',
          cyan: '#06B6D4',
          purple: '#7C3AED',
          glow: 'rgba(255, 255, 255, 0.05)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          muted: '#737373',
          faint: '#404040',
        },
      },
      fontFamily: {
        sans: ['"Outfit"', '"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Sans"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'vignette-glow': 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.02) 100%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'halftone': 'radial-gradient(circle, #fff 1px, transparent 1px)',
      },
      borderRadius: {
        '4xl': '1.5rem',
        '5xl': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.3)',
        'glow-accent': '0 0 40px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
