const { THEME } = require("./tailwind.theme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	corePlugins: {
		// Disable conversion of background colors to rgba
		backgroundOpacity: false,
		// Disable conversion of text colors to rgba
		textOpacity: false,
	},
	darkMode: "class",
	// Load in FR theme to Tailwind
	theme: THEME,
};
