/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#d95d2b",  
                secondary: "#333333", 
                hover: {
                    primary: "#b84f20",
                    secondary: "#292929" 
                }
            }
        }
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes').light,
                    primary: '#d95d2b', 
                    secondary: '#333333',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
