/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1200px'
        },
        colors: {
            'main-bg': "#2D2B2B",
            'hover-bg': "#2D2B2B",
            'accent-green': "#5FF6BF",
        },
        fontFamily: {
            custom: ['mainFont', 'sans-serif']
        },
        fontSize: {
            'header': '31px',
            "subheader-sm": "35px",
            "subheader-md": "40px",
            "subheader-lg": "45px",
            'projectTitle-sm': '24px',
            'projectTitle-md': '26px',
            'projectTitle-lg': '30px',
            'projectDetails-sm': '16px',
            'projectDetails-md': '18px',
            'projectDetails-lg': '22px',
            'body-sm': '14px',
            'body-md': '18px',
            'body-lg': '20px',
        },
    },
  },
  plugins: [],
};
