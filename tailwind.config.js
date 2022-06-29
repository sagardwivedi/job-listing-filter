/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
    },
    colors: {
      "dark-cyan": "#5ba4a4",
      "light-gray-cyan-background": "#effafa",
      "light-gray-cyan-filterTab": "#eef6f6",
      "dark-gray-cyan": "#7b8e8e",
      "very-dark-gray-cyan": "#2c3a3a",
    },
  },
  plugins: [],
};
