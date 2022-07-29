module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {},
  plugins: [require("flowbite/plugin")],
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        main: {
          900: "#F8F2EF",
          DEFAULT: "#F8F2EF",
        },
        secondary: {
          900: "#A25D39",
          DEFAULT: "#A25D39",
        },
        detail: {
          900: "#C3A7A1",
          DEFAULT: "#C3A7A1",
        },
        fontc: {
          900: "#26221F",
          DEFAULT: "#26221F",
        },
      },
    },
  },
};
