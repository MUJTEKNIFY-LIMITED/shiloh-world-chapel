import plugin from "tailwindcss/plugin";
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
        secondary: "#A65D50",
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
        fifth: "#E9E9E9",
        sixth: "#D1D1D1",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".custom-clip": {
          "clip-path":
            'path("M 30 0 Q 0 30 0 60 V 220 Q 0 250 30 280 H 190 Q 220 280 220 250 V 30 Q 220 0 190 0 Z")',
        },
      });
    }),
    require("tailwind-scrollbar-hide"),
  ],
};
