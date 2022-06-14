/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#110A41",
        100: "#20245C",
        white: "#ffffff",
        second: "#EFEEFB",
        200: "#E2E3FC",
        300: '#CDCFFE',
        400: "#494E8A"
      },
    },
  },
  plugins: [],
};
