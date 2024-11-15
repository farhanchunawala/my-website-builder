import type { Metadata } from "next";
// import "@/app/configs/globalStyles.scss";
// import "./page.scss";
import {
    montserrat,
    manrope,
    cesarDressing,
    gamjaFlower,
    atma,
} from "@/app/configs/fonts";

export const metadata: Metadata = {
    title: "Business Basic",
    description: "Business Basic",
};

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
            className={`
				${cesarDressing.variable}
				${gamjaFlower.variable}
				${atma.variable}
			`}
        >
            {children}
        </section>
    );
}
