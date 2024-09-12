module.exports = {
  content: [
    './*.{html,js}',         // Matches HTML and JS files in the root directory
    './**/*.{html,js}',      // Matches HTML and JS files in all subdirectories, excluding node_modules
    '!./node_modules/**/*',  // Excludes everything in the node_modules directory
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Monserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
