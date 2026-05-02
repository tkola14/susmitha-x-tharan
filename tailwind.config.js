/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:       '#FEFAF5',
        cream:       '#FBF5EC',
        'text-dark': '#1C0A06',
        'text-mid':  '#3D1A10',
        'text-soft': '#7A5040',
        gold:        '#A0720A',
        'gold-light':'#C9964A',
        rose:        '#8B2040',
        'rose-light':'#C4607A',
        navy:        '#1B2A42',
      },
      fontFamily: {
        italiana:  ['Italiana','serif'],
        cormorant: ['"Cormorant Garamond"','serif'],
        jost:      ['Jost','sans-serif'],
      },
    },
  },
  plugins: [],
}
