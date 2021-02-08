const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    container: false,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        'light-gray': '#F4F7FC',
        'strong-gray': '#707070'
      },
      spacing: {
        '7.5': '1.875rem',
        '11.5': '2.875rem',
        '17.5': '4.375rem',
        '59.5': '17.875rem',
        '93.5': '23.375rem',
        '175': '43.75rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          maxWidth: theme('screens.sm'),

          '@screen sm': {
            maxWidth: theme('screens.sm')
          },
          '@screen md': {
            maxWidth: theme('screens.md')
          },
          '@screen lg': {
            maxWidth: theme('screens.lg')
          },
          '@screen xl': {
            maxWidth: theme('screens.xl')
          },
          '@screen 2xl': {
            maxWidth: '1640px'
          }
        }
      })
    }
  ]
}
