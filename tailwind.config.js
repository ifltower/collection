/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        tagFilipino: '#ff6961',
        tagSpecial: '#fcbf49',
        tagCompleted: '#57cc99',
        tagFull: '#6a4c93',
        primary: '#0077FF',
      },
    },
  },
  plugins: [],
}
