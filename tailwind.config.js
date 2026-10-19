/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0C0C0C',
        surface: {
          DEFAULT: '#141416',
          muted: '#18181B',
          card: '#121214',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(255, 255, 255, 0.16)',
        },
        primary: {
          text: '#D7E2EA',
          muted: '#8A99A8',
          subtle: '#646973',
        },
        accent: {
          purple: '#8B5CF6',
          violet: '#7C3AED',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          indigo: '#6366F1',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Kanit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'heading-gradient': 'linear-gradient(135deg, #BBCCD7 0%, #8A99A8 50%, #646973 100%)',
        'heading-light': 'linear-gradient(180deg, #FFFFFF 0%, #BBCCD7 60%, #8A99A8 100%)',
        'accent-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'violet-blue-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(139, 92, 246, 0.25)',
        'glow-md': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 45px -10px rgba(99, 102, 241, 0.4)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
