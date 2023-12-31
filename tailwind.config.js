/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Clash Display', 'sans-serif'],
      'sans': ['Montserrat', 'sans-serif'],
      'sans-serif': ['Unica One', 'sans-serif'],
    },
    colors:{
      'black': '#000000',
      'white': '#FFFFFF',
      purple: 
      {
        100: '#D434FE',
        200: '#100B20',
        300: '#150E28',
      },
    },
    extend: {
      width: {
        '70': '70%',
        '50':'50%',
        '80':'80%'
       },
       fontFamily:{
        montserrat: ['Montserrat']
       }
    },
  },
  plugins:[require('tailwindcss-gradients')],
}

