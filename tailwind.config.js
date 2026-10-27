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
        cyber: {
          dark: '#0a0e17',
          card: '#111827',
          surface: '#1e293b',
          cyan: '#00f5d4',
          neon: '#0df',
          red: '#ff4655',
          gold: '#f59e0b',
          purple: '#a855f7',
          pink: '#ec4899',
          green: '#10b981',
          blue: '#3b82f6'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        display: ['"VT323"', 'monospace'],
        mono: ['"Space Grotesk"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'pixel-cyan': '0 0 15px rgba(0, 245, 212, 0.5), 3px 3px 0px #000',
        'pixel-red': '0 0 15px rgba(255, 70, 85, 0.5), 3px 3px 0px #000',
        'pixel-gold': '0 0 15px rgba(245, 158, 11, 0.5), 3px 3px 0px #000',
        'glow-cyan': '0 0 25px rgba(0, 245, 212, 0.4)',
        'glow-red': '0 0 25px rgba(255, 70, 85, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-start infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        }
      }
    },
  },
  plugins: [],
}
