module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont'],
      },
      overflow: {
        'hide': 'hidden'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
