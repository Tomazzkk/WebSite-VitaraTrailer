import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2D5A27", // Forest Green
                secondary: "#E9A426", // Mustard Gold
                surface: "#F2F2F2", // Surface/Light
                dark: "#1F2937", // Dark/Text
                "dark-accent": "#1B3617", // Dark Accent
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                display: ['var(--font-montserrat)'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
