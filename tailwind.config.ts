import { type Config } from "tailwindcss";

export default {
	content: ["{routes,islands,components}/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				playwrite: ['"Playwrite CU"', "cursive"], // Use the font name as specified in your font import
			},
		},
	},
} satisfies Config;
