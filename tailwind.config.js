module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: `#25021B`,
      white: `#FFFFFF`,
      background: {
        light: `#FAFAFA`,
        dark: `#1A0112`,
      },
      gray: {
        800: `#2B2628`,
        700: `#484043`,
        600: `#645B5E`,
        500: `#7F7679`,
        400: `#9E9699`,
        300: `#BDB6B8`,
        200: `#DBD7D8`,
        100: `#F8F5F5`,
      },
      purple: {
        primary: `#892885`,
        900: `#431441`,
        800: `#521850`,
        700: `#3C1533`,
        600: `#571B52`,
        500: `#68296A`,
        400: `#925694`,
        300: `#B28CB4`,
        200: `#D4C1D5`,
        100: `#EBE4ED`,
      },
      magenta: {
        dark: `#F80A5B`,
        light: `#FEEEF4`,
      },
      focus: `#2EB4FF`,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
