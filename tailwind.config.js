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
        primaryColor :' #6B3CC9',
        secondaryColor: '#F28D35',
        caribbeanBlue : '#1CBDDD',
        emeraldGreen : '#4DCA79'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        lato:['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

