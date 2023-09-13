import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('/assets/hero-bg.jpg')",
            },
            colors: {
                primary: {
                    1: "#0cbc4d",
                    2: "#08e14c",
                },
                black: {
                    1: "#121212",
                    2: "#1f222b",
                    3: "#252934",
                },
                white: {
                    1: "#ffffff",
                    2: "#dfdfdf",
                    3: "#d0d0d0",
                },
            },
        },
    },
    plugins: [],
};
export default config;
