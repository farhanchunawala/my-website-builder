import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import Button from "@/elements/Button01";
import Text from "@/elements/Text01";
import TextBlock from "@/components/TextBlock01";
import CardGrid from "@/components/CardGrid01";

const Section004 = () => {
    const { styles, textStyles } = getCustomStyles();

    return (
        <div className="s004" style={styles.container}>
            <TextBlock
				headingLevel="h2"
                content={content.textBlock}
                styles={styles.textBlock}
                textStyles={textStyles}
            />
			{/* <Text
				content={content.title}
				styles={styles.title}
				textStyles={textStyles.title}
				isHtml
			/> */}
			{/* <Text
				content={content.subtitle}
				styles={styles.subtitle}
				textStyles={textStyles.subtitle}
			/> */}
            <CardGrid
                content={content.cardGrid}
                styles={styles.cardGrid}
				textStyles={textStyles.cardGrid}
            />
			<Button
				content={content.button}
				styles={styles.button}
				textStyles={textStyles.button}
			/>
        </div>
    );
}

export default Section004;
