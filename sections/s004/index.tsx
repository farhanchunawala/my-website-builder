import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";
import Button from "@/elements/Button01";

const Section004 = () => {
    const { styles, textStyles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
				headingLevel="h2"
                content={content.textBlock}
                style={styles.textBlock}
                textStyles={textStyles}
            />
            <CardGrid
                content={content.cardGrid}
                style={styles.cardGrid}
				textStyles={textStyles.cardGrid}
            />
			<Button
				content={content.button}
				style={styles.button}
				textStyles={textStyles.button}
			/>
        </div>
    );
}

export default Section004;
