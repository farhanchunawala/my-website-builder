import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import config from "./config";
import TextBlock from "@/components/TextBlock01";

const Section005 = () => {
    const { styles, textStyles } = getCustomStyles();
	
	return (
		<div className="s005" style={styles.container}>
			<TextBlock
				content={content.textBlock}
				styles={styles.textBlock}
				textStyles={textStyles.textBlock}
				config={config.textBlock}
			/>
		</div>
	);
}

export default Section005;
