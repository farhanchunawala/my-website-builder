// import localFont from "next/font/local";
import { Montserrat, Manrope } from "next/font/google";

// const fonts = {
// 	primary: {
// 		family: "Montserrat",
// 		link: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
// 	},
// 	title: {
// 		family: "Manrope",
// 		link: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
// 	},
// };

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-manrope",
});

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });

// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });

// const loadFonts = () => {
// 	Object.values(fonts).forEach((font) => {
// 		// Check if the font link already exists in the document
// 		if (!document.querySelector(`link[href='${font.link}']`)) {
// 			const link = document.createElement("link");
// 			link.href = font.link;
// 			link.rel = "stylesheet";
// 			document.head.appendChild(link);
// 		}
// 	});

// 	document.documentElement.style.setProperty(
// 		"--title-font",
// 		fonts.title.family
// 	);
// 	document.documentElement.style.setProperty(
// 		"--primary-font",
// 		fonts.primary.family
// 	);
// };

export { montserrat, manrope };
// export default fonts;
// export { loadFonts };
