/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1370px',
      'largerDevice': "1500px"
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'cover': "url(../src/media/cover.jpg)"
      }
    },
  },
  plugins: [],
}
