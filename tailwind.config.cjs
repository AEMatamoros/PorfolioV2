module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  variants: {},
  plugins: [require('flowbite/plugin')],
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        main: {
          900: '#F4F2E9',
          DEFAULT: '#F4F2E9',
        },
        secondary: {
          900: '#000',
          DEFAULT: '#000',
        },
        detail: {
          900: '#fff',
          DEFAULT: '#fff',
        },
        fontc: {
          900: '#5C6E58',
          DEFAULT: '#5C6E58',
        },
      },
      boxShadow: {
        cd: '0px 15px 20px 1px rgba(0,0,0,0.75)',
        cl: '0px 15px 20px 1px rgba(244, 242, 233,255.75)',
      },
    },
  },
}
