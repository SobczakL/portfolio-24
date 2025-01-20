/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "425px",
                md: "768px",
                lg: "1100px",
            },
            colors: {
                "main-bg": "#2D2B2B",
                "hover-bg": "#2D2B2B",
                "subtext-bg": "#5D5B5B",
                "accent-green": "#5FF6BF",
            },
            fontFamily: {
                custom: ["mainFont", "sans-serif"],
                pixel: ["pixel", "sans-serif"],
                jetB: ["jetB", "sans-serif"],
                led: ["led", "sans-serif"],
            },
            fontSize: {
                "header-sm": "55px" ,
                "header-md": "74px" ,
                "header-lg": "88px",
                "subheader-sm": "12px",
                "subheader-md": "14px",
                "subheader-lg": "16px",
                "hero-sm": "18px",
                "hero-md": "22px",
                "hero-lg": "28px",
                "projectTitle-sm": "26px",
                "projectTitle-md": "28px",
                "projectTitle-lg": "30px",
                "projectDetails-sm": "16px",
                "projectDetails-md": "18px",
                "projectDetails-lg": "20px",
                "body-sm": "14px",
                "body-md": "16px",
                "body-lg": "18px",
            },
            animation: {
                "pulse-light": "pulse 3s cubis-bezier(0.4, 0, 0.6, 1) infinite"

            },
        },
    },
    plugins: [],
};
