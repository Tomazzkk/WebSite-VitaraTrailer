import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< HEAD
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2D5A27', // Forest Green
					foreground: '#F2F2F2' // Ice White
				},
				secondary: {
					DEFAULT: '#F2F2F2', // Ice White
					foreground: '#2D5A27' // Forest Green
				},
				surface: '#F2F2F2',
				dark: '#1F2937',
				'dark-accent': '#1B3617',
				background: '#F2F2F2', // Default background
				foreground: '#2D5A27', // Default text
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#2D5A27'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#2D5A27'
				},
				muted: {
					DEFAULT: '#F3F4F6',
					foreground: '#1B3617'
				},
				accent: {
					DEFAULT: '#E9A426', // Mustard Yellow
					foreground: '#2D5A27'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#F2F2F2'
				},
				border: '#2D5A27', // Forest Green
				input: '#2D5A27',
				ring: '#2D5A27',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'var(--font-manrope)'
				],
				display: [
					'var(--font-outfit)'
				]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				shine: {
					"0%": { "background-position": "100%" },
					"100%": { "background-position": "-100%" },
				},
			},
			animation: {
				shine: "shine 5s linear infinite",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
=======
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
                sans: ['var(--font-manrope)'],
                display: ['var(--font-outfit)'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
>>>>>>> parent of e1503ed (Implementacao de animacoes nos textos e cards)
};
export default config;
