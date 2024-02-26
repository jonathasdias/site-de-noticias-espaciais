/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(160px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(190px, 1fr))',
      }
    },
  },
  plugins: [],
}