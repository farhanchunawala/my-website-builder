import type { Metadata } from "next";
// import "@/app/configs/globalStyles.scss";
// import "./page.scss";
import { inter } from "@/app/configs/fonts";

// export const metadata: Metadata = {
//     title: "Business Basic",
//     description: "Business Basic",
// };

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section
            className={`
				${inter.variable}
			`}
        >
            {children}
        </section>
    );
}
