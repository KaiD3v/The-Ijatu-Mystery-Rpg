module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        times: ["Times New Roman", "serif"],
      },
      colors: {
        github: '#010409'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
