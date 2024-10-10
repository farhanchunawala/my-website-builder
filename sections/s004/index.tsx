import styles from "./styles.module.scss";
import Titles from "@/components/Titles01";
import CardGrid from "@/components/CardGrid01";

const obj = {
	titles: {
		title: `Our <span>Services</span>`,
		subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	cards: {
		
	}
};

export default function Section004() {
    return (
        <div className={styles.s004}>
			<Titles content={obj.titles} />
			<CardGrid content={obj.cards} />
        </div>
    );
}
