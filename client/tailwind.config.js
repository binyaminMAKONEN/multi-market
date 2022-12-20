/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        'clear': 'rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        "radish-img": "url('https://www.seedsavers.org/site/img/seo-images/0151-pink-lady-slipper-radish.jpg')"
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}
