import "./styles.module.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";

const Section005 = () => {
    const { styles, textStyles } = getCustomStyles();
	
	return (
		<div className="s005" style={styles.container}>
			
		</div>
	);
}

export default Section005;
