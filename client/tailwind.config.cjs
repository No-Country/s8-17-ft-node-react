/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                hero: "url('/home/hero.png')"
            },
            fontFamily: {
                title: ["var(--font-poppins)", "sans-serif"],
                text: ["var(--font-comissioner)", "sans-serif"]
            },
            colors: {
                primary: {
                    50: "#fff3e7",
                    100: "#ffe7cf",
                    200: "#ffcfa0",
                    300: "#ffb870",
                    400: "#ffa041",
                    500: "#ff8811",
                    600: "#cc6d0e",
                    700: "#99520a",
                    800: "#663607",
                    900: "#331b03"
                },
                secondary: {
                    50: "#ffe6f3",
                    100: "#ffcce7",
                    200: "#ff99cf",
                    300: "#ff66b7",
                    400: "#ff339f",
                    500: "#ff0087",
                    600: "#cc006c",
                    700: "#990051",
                    800: "#660036",
                    900: "#33001b"
                },
                complementary: {
                    50: "#fefaf1",
                    100: "#fdf6e2",
                    200: "#fbecc5",
                    300: "#f8e3a9",
                    400: "#f6d98c",
                    500: "#f4d06f",
                    600: "#c3a659",
                    700: "#927d43",
                    800: "#62532c",
                    900: "#312a16"
                },
                dark: "#1E1E1E", // eerieBlack
                normal: "#514B46", // darkLiver
                light: "#898989", // taupeGray
                white: "#FCFBFB",
                error: "#E63946"
            }
        }
    },
    plugins: []
};
