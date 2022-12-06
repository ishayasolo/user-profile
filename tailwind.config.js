/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#EDF7FE",
        primaryBlue: "#0086C9",
        secondaryBlue: "#7CD4FD",
      }
    },
  },
  plugins: [],
}
