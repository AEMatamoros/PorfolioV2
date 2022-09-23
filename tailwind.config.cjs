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
          900: "#996259",
          DEFAULT: "#996259",
        },
        detail: {
          900: "#33b9aa",
          DEFAULT: "#33b9aa",
        },
        fontc: {
          900: "#5C6E58",
          DEFAULT: "#5C6E58",
        },
      },
      boxShadow: {
        cd: "0px 15px 20px 1px rgba(0,0,0,0.75)",
        cl: "0px 15px 20px 1px rgba(244, 242, 233,255.75)",
      },
    },
  },
};
