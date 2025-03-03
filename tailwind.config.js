/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E'
        },
        sand: {
          DEFAULT: '#F4A261',
          50: '#FDF8F3',
          100: '#FAEEE4',
          200: '#F7E0CC',
          300: '#F4A261',
          400: '#E76F51',
          500: '#D65B3E',
          600: '#C44D31',
          700: '#A13E27',
          800: '#7E301E',
          900: '#5B2215'
        },
        desert: {
          DEFAULT: '#E9C46A',
          50: '#FCF9F1',
          100: '#F9F3E3',
          200: '#F4E4C0',
          300: '#E9C46A',
          400: '#E6B058',
          500: '#E29D46',
          600: '#DE8A34',
          700: '#BA6E22',
          800: '#965618',
          900: '#723F10'
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(249, 115, 22, 0.3)'
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'desert-pattern': 'url("/images/patterns/desert.svg")'
      }
    }
  },
  plugins: [],
}
