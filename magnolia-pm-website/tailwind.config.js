/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        "magnolia-blue": "#324e99",
        "magnolia-highlight": "#1850E7",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        material: ["Material Symbols Sharp"],
      },
    },
  },
  plugins: [],
};
