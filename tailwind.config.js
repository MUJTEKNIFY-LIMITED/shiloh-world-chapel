/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        trajan: ["Trajan Pro", "serif"],
        galano: ["Galano Grotesque", "sans-serif"],
      },
      colors: {
        primary: "#071B65",
        tertiary: "#8F8F8F",
      },
      textColor: {
        primary: "#071B65",
        secondary: "#A65D50",
        tertiary: "#8F8F8F",
      },
      borderColor: {
        primary: "#071B65",
        secondary: "#E8E8E8",
        tertiary: "#8F8F8F",
        fourth: "#355FA7",
      },
    },
  },
  plugins: [],
};
