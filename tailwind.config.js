/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you prefer OS‐level dark mode
  content: [
    './index.html',            // your root HTML file
    './src/**/*.{js,jsx,ts,tsx}' // any JS/JSX/TS/TSX under src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
