/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "c-gray": "#444444",
        "c-tile": "#272A2C",
        "c-bg": "#17191A",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
