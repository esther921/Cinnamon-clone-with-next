/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      backgroundImage: {
        'image-home': "url('/Images/bg-noise.png')",
      },
      fontFamily:{
        'sans':"sans",
        'bold':"bold",
        'heavy': 'heavy',
        'semibold': 'semibold'
      },
      backdropBrightness: {
        10: '.11',
      }
    },
  },
  plugins: [],
}
