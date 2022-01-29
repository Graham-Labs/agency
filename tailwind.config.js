module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'sm': "640px",
			'md': "768px",
			"lg": "1024px",
			"xl": "1280px",
			'break': "1440px",
			"2xl": "1536px",
		},
		// Some useful comment
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			raleway: ["Raleway", "sans-serif"],
			MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
		},
	},
	plugins: [],
};
