/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      backgroundImage: {
        "spring-sale-banner": "url('/images/spring-sale-banner.png')",
      },
    },
  },
  plugins: [],
};
