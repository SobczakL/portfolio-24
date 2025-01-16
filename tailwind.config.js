/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "375px",
                sm: "425px",
                md: "768px",
                lg: "1200px",
            },
            colors: {
                "main-bg": "#2D2B2B",
                "hover-bg": "#2D2B2B",
                "accent-green": "#5FF6BF",
            },
            fontFamily: {
                custom: ["mainFont", "sans-serif"],
                pixel: ["pixel", "sans-serif"],
                jetB: ["jetB", "sans-serif"],
                led: ["led", "sans-serif"],
            },
            fontSize: {
                "header-xs": "40px",
                "header-sm": "55px" ,
                "header-md": "74px" ,
                "header-lg": "88px",
                header: "31px",
                "subheader-sm": "45px",
                "subheader-md": "40px",
                "subheader-lg": "52px",
                subheader: "20px",
                "hero-sm": "18px",
                "hero-md": "22px",
                "hero-lg": "28px",
                hero: "16px",
                "projectTitle-sm": "26px",
                "projectTitle-md": "30px",
                "projectTitle-lg": "36px",
                projectTitle: "24px",
                "projectDetails-sm": "16px",
                "projectDetails-md": "18px",
                "projectDetails-lg": "22px",
                projectDetails: "14px",
                "body-sm": "14px",
                "body-md": "18px",
                "body-lg": "20px",
                body: "14px",
            },
            animation: {
                "pulse-light": "pulse 3s cubis-bezier(0.4, 0, 0.6, 1) infinite"

            },
        },
    },
    plugins: [],
};
