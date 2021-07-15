const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./*.html", "./assets/**/*.{js,ts,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
