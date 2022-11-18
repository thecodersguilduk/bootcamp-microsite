const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.11ty.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      customRed: '#BB2637',
      codersBlue: '#2574a9',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    backgroundImage: {
      'hero-lg': "url('../img/hero.webp')",
      'hero-sm': "url('../img/hero-mobile.webp')",
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}