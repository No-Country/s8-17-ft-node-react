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
        hero: "url('/hero.png')"
      },
      fontFamily: {
        title: ["var(--font-poppins)"],
        text: ["var(--font-comissioner)"]
      },
      colors: {
        "primary-americanOrange": "#FF8811",
        "secondary-brightPink": "#FF0087",
        "complementary-crayola": "#F4D06F",
        "text-eerieBlack": "#1E1E1E",
        "text-darkLiver": "#514B46",
        "text-taupeGray": "#898989"
      }
    }
  },
  plugins: []
};