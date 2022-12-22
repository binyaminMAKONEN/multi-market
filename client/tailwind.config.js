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
        "radish-img": "url('https://cdn.britannica.com/12/187212-050-F076FE9C/beets-beetroot-table-beet-Root-vegetable.jpg')",
        "artichoke-img":"url('https://images.pexels.com/photos/3873893/pexels-photo-3873893.jpeg')"
            },
            objectPosition:{
              "p-none":"none"
            }

    },
  },
  plugins: [require('flowbite/plugin')],
}
