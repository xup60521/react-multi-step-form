/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: { "ubuntu": ["Ubuntu", "sans-serif"] },
            keyframes: {
                "fade-in-right": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(10%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
                "fade-out-left": {
                    "0%": {
                        opacity: 1,
                    },
                    "100%": {
                        opacity: 0,
                        transform: "translate3d(-10%, 0, 0)",
                    },
                },
            },
            animation: {
                fadeinright: 'fade-in-right 0.25s ease-in-out 0s 1',
                fadeoutleft: 'fade-out-left 0.25s ease-in-out 0s forwards;',
            }
        },
    },
    plugins: [],
}

