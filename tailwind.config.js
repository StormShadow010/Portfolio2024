/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "close-menu": "url('/assets/icons/closeMenuHamburguer.svg')",
        "open-menu": "url('/assets/icons/close-menu.svg')",
      }
    },
  },
  plugins: [],
}