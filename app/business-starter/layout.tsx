import type { Metadata } from "next";
// import "@/app/configs/globalStyles.scss";
// import "./page.css";
import "./page.scss";
import { montserrat, manrope } from "@/app/configs/fonts";

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
				${montserrat.variable}
				${manrope.variable}
			`}
		>
            {children}
        </section>
    );
}
