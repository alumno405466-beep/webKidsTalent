/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#10B2AE',
        danger: '#E92634',
        warning: '#FDBC1F',
        success: '#11AF4B',
        ink: '#000000',
        charcoal: '#282828',
        blue: '#3651A3',
        purple: '#5F177A',
        brandL: '#7DCECB',
        brandD: '#0C817E',
      },
      boxShadow: {
        soft: '0 12px 30px -18px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        display: ['"Sketch Block"', '"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['"Adobe Caslon Pro"', 'Georgia', 'serif'],
        monoish: ['"American Typewriter"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

