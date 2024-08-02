/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // for dark theme
      "d-bg": "#010104",
      "d-primary": "#9B97DD",
      "d-secondary": "#03002E",
      "d-text": "#EAE9FC",
      "d-accent": "#2914E3",

      // for light theme
      "l-bg": "#010104",
      "l-primary": "#9B97DD",
      "l-secondary": "#03002E",
      "l-text": "#EAE9FC",
      "l-accent": "#2914E3",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      popin: ["Poppins"],
    },
  },
  plugins: [],
});
