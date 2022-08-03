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
          900: "#F92649",
          DEFAULT: "#F92649",
        },
        detail: {
          900: "#6292C4",
          DEFAULT: "#6292C4",
        },
        fontc: {
          900: "#5C6E58",
          DEFAULT: "#5C6E58",
        },
      },
    },
  },
};
