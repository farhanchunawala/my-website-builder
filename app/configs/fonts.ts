const fonts = {
	primary: {
		family: "Montserrat",
		link: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
	},
	title: {
		family: "Manrope",
		link: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
	},
};

export default fonts;

// export const injectGoogleFonts = () => {
// 	Object.values(fonts).forEach((font) => {
// 		// Check if the font link already exists in the document
// 		if (!document.querySelector(`link[href='${font.link}']`)) {
// 			const link = document.createElement("link");
// 			link.href = font.link;
// 			link.rel = "stylesheet";
// 			document.head.appendChild(link);
// 		}
// 	});
// };

// Since the link tag is appended dynamically, it will only start loading after JavaScript execution.
// This might slightly delay font loading compared to having the <link> tag directly in the HTML <head>.
// If this is a concern, you can consider performance optimizations like preloading the font if necessary.
