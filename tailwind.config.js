/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'dm-mono': ['"DM Mono"', 'Menlo', 'monospace'],
      },
      colors: {
        'brand-dark': '#0d0d0d',
        'brand-gold': '#d8b08c',
        'brand-brown': '#a67244',
        'brand-peach': '#f9b87f',
        'brand-dark-brown': '#3e2f22',
        'brand-dark-teal': '#1f3736',
        'brand-cream': '#f2e5d5',
        'brand-teal': '#116964',
      },
    },
  },
  plugins: [],
};