/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'375px',
      md: '768px',
      lg: '1200px',
      xl:'1440px'
    },
    extend: {
      colors:{
        dragonlordPurple :' #6B3CC9',
        sunOrange: '#F28D35'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

