/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors:{
        'dark-purple' : '#2c2c54'
      },
    },
  },
  plugins: [],
}
