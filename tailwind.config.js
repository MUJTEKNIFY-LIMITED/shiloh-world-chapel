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
        outline: "#355FA7"
      },
      textColor: {
        primary: "#071B65",
        secondary: "#8F8F8F"
      },
    },
  },
  plugins: [],
};
