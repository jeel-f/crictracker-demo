/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'primary': {
          '50': '#edf8ff',
          '100': '#d6eeff',
          '200': '#b7e3ff',
          '300': '#85d3ff',
          '400': '#4cbaff',
          '500': '#2298ff',
          '600': '#0b78ff',
          '700': '#045de9',
          '800': '#0b4dc2',
          '900': '#104498',
        },
      }
    },
  },
  plugins: [],
}
