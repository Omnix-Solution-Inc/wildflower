/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: '#3D4A3E',
        sage: '#7A8B7B',
        terracotta: '#B88373',
        linen: '#E3C2B9',
        sand: '#F4EFEB',
        charcoal: '#2F2A27',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        script: ['Pinyon Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
