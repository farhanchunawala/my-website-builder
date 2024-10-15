import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";
import config from "./config";

const Section0 = () => {
    const { styles, textStyles } = getCustomStyles();
	
	return (
		<div className="s0" style={styles.container}>
			
		</div>
	);
}

export default Section0;
