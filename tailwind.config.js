/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {
            colors: {
                Moderate_violet: "hsl(263, 55%, 52%)",
                Very_dark_grayish_blue: "hsl(217, 19%, 35%)",
                Very_dark_blackish_blue: "hsl(219, 29%, 14%)",
                White: "hsl(0, 0%, 100%)",
                Light_gray: "hsl(0, 0%, 81%)",
                Light_grayish_blue: "hsl(210, 46%, 95%)",
            },
        },
    },
    screens: {
        sm: "40px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
    },
    plugins: [],
};
