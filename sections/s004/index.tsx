import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import TitleAndText from "@/components/TitleAndText01";
import CardGrid from "@/components/CardGrid01";

const obj = {
    titleAndText: {
        title: `Our <span>Services</span>`,
        subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
	CardGrid: {
		cards: [
			{
				icon: "svg1.svg",
			},
			{
				icon: "svg2.svg",
			},
			{
				icon: "svg3.svg",
			},
			{
				icon: "svg4.svg",
			},
			{
				icon: "svg5.svg",
			},
			{
				icon: "svg6.svg",
			},
		],
	}
};

export default function Section004() {
    const styles = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TitleAndText content={obj.titleAndText} style={styles.titles} />
            <CardGrid content={obj.CardGrid} style={styles.cardGrid} />
        </div>
    );
}
