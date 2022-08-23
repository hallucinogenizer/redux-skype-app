/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}
