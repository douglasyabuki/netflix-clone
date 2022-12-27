/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-white-font' : "#e5e5e5",
        'navbar-color' : '#00000007',
        'transparent-color' : '#00000000',
        'netflix-black': '#141414'
      }
    },
  },
  plugins: [],
};
