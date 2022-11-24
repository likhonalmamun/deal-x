/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

//       mytheme: {
//       'primary': [#ef233c],
//       'secondary': [#d90429],
//       'lights': [#edf2f4],
//       'darks': [#2b2d42],
//       'accents': [#8d99ae],
