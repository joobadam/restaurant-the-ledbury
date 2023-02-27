/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
