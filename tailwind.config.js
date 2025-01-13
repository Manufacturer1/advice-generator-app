/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
          primary:{
            lightCyan:'hsl(193, 38%, 86%)',
            neonGreen: 'hsl(150, 100%, 66%)',
          },
          neutral:{
            grayishBlue:'hsl(217, 19%, 38%)',
            darkGrayishBlue:'hsl(217, 19%, 24%)',
            darkBlue:'hsl(218, 23%, 16%)',
          }
      },
      letterSpacing: {
        mega: '0.3em', 
      },
      boxShadow: {
        neonGreen: '0 0 30px 3px hsl(150, 100%, 66%)'
      },
    },
  },
  plugins: [],
}

