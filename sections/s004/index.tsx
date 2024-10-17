import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import data from "./data";
import Button from "@/elements/Button01/v1";
import TextBlock from "@/components/TextBlock01/v1";
import CardGrid from "@/components/CardGrid01/v1";

const Section004 = () => {
    const { styles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
                data={data.textBlock}
                styles={styles.textBlock}
            />
            <CardGrid
                data={data.cardGrid}
                styles={styles.cardGrid}
            />
			<Button
				data={data.button}
				styles={styles.button}
			/>
        </div>
    );
}

export default Section004;
