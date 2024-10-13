import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import { CustomStyles } from "./styles.types";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";

const Section004: React.FC = () => {
    const { styles, textStyles }: CustomStyles = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
                content={content.textBlock}
                style={styles.textBlock}
                textStyles={textStyles}
            />
            <CardGrid
                content={content.CardGrid}
                style={styles.cardGrid}
				textStyles={textStyles.cardGrid}
            />
        </div>
    );
}

export default Section004;
