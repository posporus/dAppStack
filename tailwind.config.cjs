module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: false,
}
