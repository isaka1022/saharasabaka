/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#F5F5FF',
          // ... 他の色調
        },
        secondary: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          // ... 他の色調
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(79, 70, 229, 0.3)'
      }
    }
  },
  plugins: [],
}
