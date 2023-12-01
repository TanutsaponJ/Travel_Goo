/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#00a651",
        primaryLight: "#005f15",
      },
      fontFamily: {
        OpenSens: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
