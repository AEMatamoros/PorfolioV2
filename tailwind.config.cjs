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
          900: "#51C9CD",
          DEFAULT: "#51C9CD",
        },
        dark: {
          900: "#0F172A",
          DEFAULT: "#0F172A",
        },
        light: {
          900: "#fff",
          DEFAULT: "#fff",
        },
      },
      boxShadow: {
        cd: "0px 15px 20px 1px rgba(0,0,0,0.75)",
        cl: "0px 15px 20px 1px rgba(244, 242, 233,255.75)",
      },
    },
  },
};
