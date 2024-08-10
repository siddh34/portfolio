import { type Config } from "tailwindcss";

export default {
	content: ["{routes,islands,components}/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryBlack: "#212121",
				backgroundBlack: "#111",
				orangered: "orangered",
			},
			fontFamily: {
				playwrite: ['"Playwrite CU"', "cursive"],
			},
		},
	},
} satisfies Config;
