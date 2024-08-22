import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue': {
                    50: '#f0f9ff',
                    100: '#e6ebf5',
                    200: '#ebf2ff',
                    300: '#D3E1FF',
                    400: '#A8C3FF',
                    500: '#0032A0',
                    600: '#002c90',
                    700: '#00247a',
                    800: '#001d65',
                    900: '#001750',
                },

                'orange': {
                    50: '#fff8f1',
                    100: '#feecdc',
                    200: '#fcd9bd',
                    300: '#fdba8c',
                    400: '#ff8a4c',
                    500: '#FF9433',
                    600: '#FF7F0B',
                    700: '#F06C0D',
                    800: '#c24e33',
                    900: '#a04126',
                },
            },

            keyframes: {
                fadeDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '50%': { opacity: '0.5', transform: 'translateY(-5px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeDown: 'fadeDown 0.5s ease-out forwards',
            },

            aspectRatio: {
                '4/3': '4 / 3',
                '3/4': '3 / 4',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
