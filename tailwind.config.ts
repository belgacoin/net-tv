import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom colors for movie/TV streaming theme
      colors: {
        // Primary brand colors
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Neon accent colors
        neon: {
          green: '#39ff14',
          blue: '#00ffff',
          purple: '#bf00ff',
          pink: '#ff1493',
          yellow: '#ffff00',
          orange: '#ff6600',
        },
        // Dark theme colors
        dark: {
          50: '#f6f6f7',
          100: '#e3e3e6',
          200: '#c7c8ce',
          300: '#a3a5ad',
          400: '#787b87',
          500: '#5c5f6c',
          600: '#4a4d58',
          700: '#3f414a',
          800: '#36373f',
          900: '#30313',
          950: '#0a0a0c',
        },
        // Movie-specific colors
        movie: {
          black: '#0a0a0c',
          dark: '#141416',
          card: '#1a1a1e',
          border: '#2a2a2e',
          text: '#e4e4e7',
          muted: '#a1a1aa',
        },
      },
      // Custom fonts
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(57, 255, 20, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom border radius
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // Custom box shadows
      boxShadow: {
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.4)',
        'neon-blue': '0 0 20px rgba(0, 255, 255, 0.4)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
      },
      // Custom gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0c 0%, #141416 50%, #1a1a1e 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(26, 26, 30, 0.8) 0%, rgba(10, 10, 12, 0.95) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
