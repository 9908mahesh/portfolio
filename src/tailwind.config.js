/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // blue-700
        secondary: "#9333EA", // purple-600
        accent: "#F59E0B", // amber-500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
