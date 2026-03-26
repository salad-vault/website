import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts}',
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    fontFamily: {
      mono: ['"Fira Code"', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#0d1117',
        secondary: '#1c2128',
        accent: '#238636',
        'accent-hover': '#2ea043',
      },
    },
  },
} satisfies Config
