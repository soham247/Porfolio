/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'], // Add your font here
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

