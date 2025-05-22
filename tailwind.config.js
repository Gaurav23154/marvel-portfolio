/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marvel-red': '#E62429',
        'marvel-blue': '#4B9CD3',
        'marvel-green': '#5EAA15',
        'marvel-purple': '#6B3FA0',
      },
      fontFamily: {
        'marvel': ['Marvel', 'sans-serif'],
      },
      animation: {
        'repulsor': 'repulsorBlast 0.5s ease',
        'lightning': 'lightningStrike 0.5s ease',
        'smash': 'hulkSmash 0.5s ease',
        'warp': 'realityWarp 1s ease',
        'snap': 'thanosSnap 0.5s ease',
        'swing': 'webSwing 0.5s ease',
      },
    },
  },
  plugins: [],
} 