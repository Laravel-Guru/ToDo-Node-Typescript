/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{tsx, jsx, ts, js}'],
  theme: {
    colors: {
      white: '#fff',
      red: '#ff0000',
      primary: {
        blue: 'hsl(220, 98%, 61%)',
        cyan: 'hsl(192, 100%, 67%)',
        purple: 'hsl(280, 87%, 65%)',
      },
      light: {
        gray: 'hsl(0, 0%, 98%)',
        'grayish-blue': {
          100: 'hsl(236, 33%, 92%)',
          200: 'hsl(233, 11%, 84%)',
          300: 'hsl(236, 9%, 61%)',
          400: 'hsl(235, 19%, 35%)',
        },
      },
      dark: {
        blue: 'hsl(235, 21%, 11%)',
        'desaturated-blue': 'hsl(235, 24%, 19%)',
        'grayish-blue': {
          100: 'hsl(236, 33%, 92%)',
          200: 'hsl(234, 39%, 85%)',
          300: 'hsl(234, 11%, 52%)',
          400: 'hsl(233, 14%, 35%)',
          500: 'hsl(237, 14%, 26%)',
        },
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        shake: {
          '0%, 75%': { transform: 'translateX(-2%)' },
          '50%, 100%': { transform: 'translateX(2%)' },
        },
      },
      animation: {
        shake: 'shake 0.2s',
      },
    },
  },
  plugins: [],
}