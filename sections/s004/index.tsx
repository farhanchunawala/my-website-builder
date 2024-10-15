import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import config from "./config";
import Button from "@/elements/Button01";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";

const Section004 = () => {
    const { styles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
                content={content.textBlock}
                styles={styles.textBlock.texts}
				config={config.textBlock}
            />
            <CardGrid
                content={content.cardGrid}
                styles={styles.cardGrid}
            />
			<Button
				content={content.button}
				styles={styles.button}
			/>
        </div>
    );
}

export default Section004;
