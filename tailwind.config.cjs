/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      fontSize: {
        xsmall: ['.6rem', '.9rem'],
        xsmaller: ['.45rem', '.62rem'],
        xsmallest: ['.3rem', '.45rem']
      },
      colors: {
        'netflix-white-font': '#e5e5e5',
        'navbar-color': '#00000070',
        'transparent-color': '#00000000',
        'netflix-black': '#141414',
        'netflix-gray' : '#6d6d6eb3'
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
