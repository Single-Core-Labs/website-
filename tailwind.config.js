/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F9FBFF',
          secondary: '#F1F4F9',
          tertiary: '#E5EAF3',
          surface: '#FFFFFF',
          surface2: '#F8FAFC',
        },
        accent: {
          primary: '#6366F1',
          secondary: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
        text: {
          primary: '#111827',
          secondary: '#374151',
          muted: '#6B7280',
          faint: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'vignette-glow': 'radial-gradient(circle at center, transparent 0%, rgba(99, 102, 241, 0.03) 100%)',
        'subtle-grid': 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
        'glow-accent': '0 0 20px rgba(99, 102, 241, 0.15)',
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
