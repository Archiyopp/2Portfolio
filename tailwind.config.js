module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: { safelist: [/data-theme$/] },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'emerald', // first one will be the default theme
      'forest',
      'cupcake',
      'dracula',
    ],
  },
};
