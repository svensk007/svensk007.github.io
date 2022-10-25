/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
      colors: {
        'hot-pink' : "#fa00ff",
        'regal-blue' : "#00a3ff",
      },
    },
  },
  plugins: [],
}