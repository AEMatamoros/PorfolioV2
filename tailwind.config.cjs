module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    variants: {},
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                main: {
                    900: '#51cd76',
                    DEFAULT: '#51cd76',
                },
                dark: {
                    900: '#111924',
                    DEFAULT: '#111924',
                },
                light: {
                    900: '#fff',
                    DEFAULT: '#fff',
                },
            },
            boxShadow: {
                cd: '0px 15px 20px 1px rgba(0,0,0,0.75)',
                cl: '0px 15px 20px 1px rgba(244, 242, 233,255.75)',
            },
        },
    },
};
