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
        "light-green-transparent": "#1DD1A140",
        "grey-1": "#C0C0C0",
        "grey-2": "#C4C4C480",
        "black-1": "#666666",
        "blue-1": "#54A0FF"
      },
      fill: {
        "light-green": "#1DD1A1"
      }
    },
  },
  plugins: [],
};
