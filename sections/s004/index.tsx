import "./styles.scss";
import { getCustomStyles, className } from "./customStyles";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";

const obj = {
    textBlock: {
        title: `Our <span>Services</span>`,
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    CardGrid: {
        cards: [
            {
                icon: "svg1.svg",
                textBlock: {
                    title: `Medical Stay`,
                    subtitle: `Get customised plan to reduce cancer risks`,
                    content: `Oncologists, Physicians, Specialities, Therapists all for you`,
                },
            },
            {
                icon: "svg2.svg",
				textBlock: {
					title: `Emergency Care`,
					subtitle: `Get customised plan to reduce cancer risks`,
					content: `Oncologists, Physicians, Specialities, Therapists all for you`,
				}
            },
            {
                icon: "svg3.svg",
				textBlock: {
					title: `Vaccination`,
					subtitle: `Get customised plan to reduce cancer risks`,
					content: `Oncologists, Physicians, Specialities, Therapists all for you`,
				}
            },
            {
                icon: "svg4.svg",
				textBlock: {
					title: `Medicines`,
					subtitle: `Get customised plan to reduce cancer risks`,
					content: `Oncologists, Physicians, Specialities, Therapists all for you`,
				}
            },
            {
                icon: "svg5.svg",
				textBlock: {
					title: `Surgery`,
					subtitle: `Get customised plan to reduce cancer risks`,
					content: `Oncologists, Physicians, Specialities, Therapists all for you`,
				}
            },
            {
                icon: "svg6.svg",
				textBlock: {
					title: `Diagnostics`,
					subtitle: `Get customised plan to reduce cancer risks`,
					content: `Oncologists, Physicians, Specialities, Therapists all for you`,
				}
            },
        ],
    },
};

export default function Section004() {
    const styles = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
                content={obj.textBlock}
				className={className.textBlock}
                style={styles.textBlock}
            />
            <CardGrid content={obj.CardGrid} className={className.cardGrid} style={styles.cardGrid}/>
        </div>
    );
}
