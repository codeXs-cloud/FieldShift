import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep greens for agriculture theme
        agri: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d', // Primary Button & Branding Green
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Earth tones for soil and land mapping
        earth: {
          50: '#fbf8f3',
          100: '#f5efe6',
          200: '#eadbc5',
          300: '#dec09d',
          400: '#d0a071',
          500: '#c5844e',
          600: '#b86b3f',
          700: '#9a5336',
          800: '#7f4530',
          900: '#673a29',
        },
        // Dark navy/space tones for headers, footers, and NASA branding elements
        space: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617', // Footer background
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right bottom, #f8fafc, #f1f5f9)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;