/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'], // <--- from tests I made on Storybook, this array doesn't work. Only the data-theme="dark" affects the result, and the class does nothing. At first I thought may there's an AND behavior, but no, just the data attributes affects it. The class is rendered useless in this array form.
  theme: {
    extend: {},
  },
  plugins: [],
};
