/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Playfair Display', 'sans-serif'],
      'sans': ['Montserrat', 'sans-serif'],
    },
    colors:{
      'black': '#000000',
      'white': '#FFFFFF',
      purple: 
      {
        100: '#D434FE',
        200: '#100B20'
      },
    },
    extend: {},
  },
  plugins: [],
}

