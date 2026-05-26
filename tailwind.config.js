/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0a0a0f',
        'saffron-neon': '#ff9933',
        'deep-orange': '#ff4500',
        'astrology-gold': '#ffd700',
        'glass-white': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'celestial-gradient': 'radial-gradient(circle at top, #1a1a2e 0%, #0a0a0f 100%)',
      },
      boxShadow: {
        'neon-orange': '0 0 10px #ff9933, 0 0 20px #ff4500',
      }
    },
  },
  plugins: [],
}
