// import localFont from "next/font/local";
import {
    Montserrat,
    Manrope,
    Caesar_Dressing,
    Gamja_Flower,
    Atma,
} from "next/font/google";

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

const cesarDressing = Caesar_Dressing({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-cesar-dressing",
    weight: "400",
});

const gamjaFlower = Gamja_Flower({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-gamja-flower",
    weight: "400",
});

const atma = Atma({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-atma",
    weight: "400",
});

export { montserrat, manrope, cesarDressing, gamjaFlower, atma };
