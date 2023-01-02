/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xsmall: ['.6rem','.9rem'],
      },
      colors: {
        'netflix-white-font' : "#e5e5e5",
        'navbar-color' : '#00000070',
        'transparent-color' : '#00000000',
        'netflix-black': '#141414'
      }
    },
  },
  plugins: [],
};
