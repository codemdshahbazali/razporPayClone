/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Mulish", "sans-serif"],
				mullish: ["Mulish", "sans-serif"],
			},
			colors: {
				deepBlue: "#02042a",
				lightBlue: "#2b84ea",
				lightBlue300: "#4b94ed",
				lightBlue500: "#0b72e7",
				greenLight: "#61cea6",
				grayText: "#818597",
				lightGray: "#e2e2e2",
				grayBlue: "#344a6c",
				deepBlueHead: "#162f56",
				gray2: "#525a76",
			},
			dropShadow: {
				customDropShadow: "0px 2px 22px rgba(202, 202, 202, 0.25)",
			},
			backgroundImage: {
				featureSection: "url('assets/feature-section-2BG.svg')",
			},
		},
	},
	plugins: [],
};
