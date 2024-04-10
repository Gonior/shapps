/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      colors : {
        accent : "#00AED6"
      }
    },
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'class', // or 'media' or 'class'
}
