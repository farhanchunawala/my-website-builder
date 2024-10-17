import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import data from "./data";
import TextBlock from "@/components/TextBlock01/v1";

const Section005 = () => {
    const { styles } = getCustomStyles();
	
	return (
		<div className="s005" style={styles.container}>
			<TextBlock
				data={data.textBlock}
				styles={styles.textBlock}
			/>
		</div>
	);
}

export default Section005;
