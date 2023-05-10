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
        },
        vueGreen:{
          DEFAULT: 'hsla(160, 100%, 37%, 1)'
        },
      margin: {
        '200':'200px',
        '100':'100px'
      }
      }
    },
  },
  plugins: [],
}

