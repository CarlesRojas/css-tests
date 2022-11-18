/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#1e212c',
      text: 'white',
      primary: '#00aaff'
    },
    fontFamily: {
      main: 'Montserrat, sans-serif',
      terrible: 'Comic Sans MS, sans-serif'
    },
    fontSize: {
      main: '16px'
    },
    extend: {}
  },
  plugins: []
};
