/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      ag: ['AGHelveticaCyr', 'sans-serif'],
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '800px',
        md: '928px',
        lg: '1184px',
        xl: '1250px',
        '2xl': '1296px',
      },
    },
  },
  plugins: [],
};
