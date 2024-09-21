/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#021526",
        blue: "#134B70",
        bgcolor: "#D9D9D9",
        lightblue: '#87ceeb',
        secondary: '#0F3F60',
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #00008b, #87ceeb)',
      }
    },
  },
  plugins: [],
}