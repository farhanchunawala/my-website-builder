// import localFont from "next/font/local";
import { Montserrat, Manrope } from "next/font/google";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });

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

export { montserrat, manrope };
