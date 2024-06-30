/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sahara-sand': '#E6D2B5',
        'desert-orange': '#FFA500',
        'oasis-blue': '#4682B4',
      },
    },
  },
  plugins: [],
}
