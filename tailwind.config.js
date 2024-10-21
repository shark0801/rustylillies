// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        backgroundcolor_top: '#E2D6CF', // Your custom top color
        backgroundcolor_bottom: '#B53C00', // Your custom bottom color
      },
      fontFamily: {
        teachers_medium: ['Teachers Medium', 'sans-serif'], // Add the custom font
      },
    },
  },
  plugins: [],
};
