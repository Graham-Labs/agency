module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// Some useful comment
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			raleway: ["Raleway", "sans-serif"],
			MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
		},
	},
	plugins: [],
};
