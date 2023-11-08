/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'lego-background': "url('/public/bg.png')"
      },
      colors: {
        'lego-yellow': "#FFE330",
        'lego-red': "#DA291C",
        'lego-green': "#237841",
      }
    },
  },
  plugins: [],
};
