/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#1DD1A1",
        "grey-1": "#C0C0C0",
        "black-1": "#666666"
      },
      fill: {
        "light-green": "#1DD1A1"
      }
    },
  },
  plugins: [],
};
