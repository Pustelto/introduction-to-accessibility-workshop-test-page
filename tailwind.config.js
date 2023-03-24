/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific row configuration
        layout: "200px minmax(0px, 1fr)",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        main: "200px minmax(0px, 1fr)",
      },
    },
  },
  plugins: [],
};
