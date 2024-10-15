import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import data from "./data";
import Button from "@/elements/Button01";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";

const Section004 = () => {
    const { styles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
                data={data.textBlock}
                styles={styles.textBlock.texts}
            />
            <CardGrid
                data={data.cardGrid}
                styles={styles.cardGrid}
            />
			<Button
				content={data.button}
				styles={styles.button}
			/>
        </div>
    );
}

export default Section004;
