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
      boxShadow: {
        'yellow-glow': '0 0 15px 5px rgba(255, 255, 0, 0.6)', 
      },
    },
  },
  plugins: [],
}

