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
          900: "#F4F2E9",
          DEFAULT: "#F4F2E9",
        },
        secondary: {
          900: "#8AA899",
          DEFAULT: "#8AA899",
        },
        detail: {
          900: "#F2D349",
          DEFAULT: "#F2D349",
        },
        fontc: {
          900: "#5C6E58",
          DEFAULT: "#5C6E58",
        },
      },
    },
  },
};
