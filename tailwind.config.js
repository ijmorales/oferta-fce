const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/CursosTable.js',
    './components/layout/*.js',
    './pages/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        'fce-orange': '#ffa455',
        'light-green': '#5de9a8',
        'war-blue': '#1f2937',
        'light-gray': '#F4F7FC'
      },
      spacing: {
        '59.5': '17.875rem',
        '93.5': '23.375rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
