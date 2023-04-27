/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        navy:{
          DEFAULT:'#0a192f'
        }
      }
    },
  },
  plugins: [],
}
