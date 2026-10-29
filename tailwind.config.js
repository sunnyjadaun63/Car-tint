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
        obsidian: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        carbon: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        crimson: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'crimson-hover': 'rgb(var(--color-primary-hover-rgb) / <alpha-value>)',
        alabaster: 'rgb(var(--color-alternate-rgb) / <alpha-value>)',
        midnight: 'rgb(var(--color-header-footer-rgb) / <alpha-value>)',
        silver: 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        'text-main': 'var(--color-text-main)',
        'border-theme': 'var(--color-border)'
      },
      fontFamily: {
        display: ['Orbitron', 'Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'glow-red': 'var(--shadow-glow)',
        'glow-red-lg': 'var(--shadow-glow-lg)'
      }
    }
  },
  plugins: [],
}
