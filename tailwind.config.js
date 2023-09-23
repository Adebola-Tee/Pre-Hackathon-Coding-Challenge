/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '70': '70%',
        '50':'50%',
        '80':'80%'
       },
       fontFamily:{
        montserrat: ['Montserrat']
       },
       // Enable group-hover variant
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins:[require('tailwindcss-gradients')],
}

