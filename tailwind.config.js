/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",

				info: "#0016DD",
				warning: "#DD7700",
				success: "#00B96B",
				error: "#BA1A1A",

				secondary: {
					100: "#D0D3DC",
					200: "#B1B5C5",
					300: "#8A90A8",
					400: "#636C8B",
					500: "#3C476E",
					600: "#121C44",
					700: "#0E1736",
					800: "#070B1B",
					900: "#040710",
				},
				primary: {
					100: "#CCCCCC",
					200: "#AAAAAA",
					300: "#808080",
					400: "#555556",
					500: "#2B2B2B",
					600: "#000000",
				},
				tertiary: {
					100: "#CCE4FF",
					200: "#AAD3FF",
					300: "#80BCFF",
					400: "#55A6FF",
					500: "#2B90FF",
					600: "#0066D4",
					700: "#0051AA",
					800: "#003D80",
					900: "#003D80",
				},
			},
			fontSize: {
				"heading-lg": ["36px", "52px"],
				"heading-md": ["28px", "40px"],

				"title-lg": ["24px", "32px"],
				"title-md": ["20px", "28px"],

				"body-lg": ["18px", "28px"],
				"body-lg2": ["18px", "28px"],
				"	body-normal": ["16px", "24px"],
				"body-normal2": ["16px", "24px"],
				"body-normal-italic": ["16px", "24px"],
				"body-small-normal": ["14px", "24px"],
				"body-small-normal2-italic": ["14px", "24px"],
				caption: ["12px", "18px"],
				caption2: ["12px", "18px"],
				"caption-italic": ["12px", "18px"],
				"extra-small": ["10px", "16px"],

				sample: ["32px", "48px"],
				"sample-one": ["28px", "40px"],
				"sample-two": ["24px", "32px"],
				"sample-three": ["20px", "28px"],
				"sample-four": ["18px", "32px"],
				"sample-five": ["16px", "32px"],
				"sample-six": ["14px", "24px"],
				"sample-seven": ["12px", "24px"],
				"sample-eight": ["10px", "20px"],
			},
		},
		plugins: [],
	},
};
