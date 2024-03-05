const COLORS = {
	coolGray: {
		100: "#fafcff",
		200: "#cdd3dc",
		300: "#a4adb9",
		400: "#828d9b",
		500: "#646e7c",
		DEFAULT: "#646e7c",
		600: "#3C4551",
		700: "#252c35",
		800: "#191e25",
		900: "#141719",
	},
	tertiary: {
		100: "#defffb",
		200: "#abf9ef",
		300: "#7bf3e3",
		400: "#4fe1ce",
		500: "#28d0b9",
		DEFAULT: "#28d0b9",
		600: "#009682",
		700: "#005f52",
		800: "#003f36",
		900: "#00332c",
	},
	red: {
		100: "#ffdee1",
		200: "#fbadb4",
		300: "#f87e88",
		400: "#f15461",
		500: "#ec0928",
		DEFAULT: "#ec0928",
		600: "#d10011",
		700: "#ac000e",
		800: "#7c000a",
		900: "#4d0006",
	},
	green: {
		100: "#deffde",
		200: "#9be19b",
		300: "#63c463",
		400: "#3baa3b",
		500: "#1c901c",
		DEFAULT: "#1c901c",
		600: "#006b00",
		700: "#005400",
		800: "#004600",
		900: "#004000",
	},
};

module.exports.THEME = {
	extend: {
		colors: COLORS,
		screens: {
			sm: "680px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			sans: ['"Libre Franklin"', "ui-sans-serif", "system-ui"],
		},
	},
};
