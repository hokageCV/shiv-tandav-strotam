/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
        colors: {
            baseBG: "#eaf7fd",
            navBG: "#83d4ef",
            navHeading: "#383838",
            navSelectorLabel: "#383838",
            navSelectorChecked: "#ff5156",
            shlokCardBG: "#cdedf8",
            shlokText: "#383838",
            blurBG: "#Fcc2a1",
            blurHoverBG: "#cdedf8",
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
