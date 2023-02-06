module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {
          colors: {
              primary: '#1B73E8',
          },
      },
      backgroundImage: {
        'starwars': "url('/src/components/images/swbackground.jpeg')"
      }
  },
  plugins: [
    require('flowbite/plugin')
    ]
};