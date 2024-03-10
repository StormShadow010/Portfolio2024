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
        "me": "url('/assets/pictures/Me2.jpeg')",
        "about-section": "url('/assets/sections/AboutMe.jpg')",
        "skills-one": "url('/assets/sections/skills1.jpg')",
        "projectIn": "url('/assets/sections/projectIn.jpg')",
        "contactme": "url('/assets/sections/contact.jpg')",
      },
      fontFamily: {
        'mainFont': ["Poppins", 'sans-serif'],
        'logoFont': ["Sixtyfour", 'sans-serif'],
        'techTitle': ["Protest Riot", 'sans-serif'],
      },
    },
  },
  plugins: [],
}