import "./styles.module.scss";
import { getCustomStyles } from "./customStyles";
import content from "./content";

const Section0 = () => {
    const { styles, textStyles } = getCustomStyles();
	
	return (
		<div className="s0" style={styles.container}>
			
		</div>
	);
}

export default Section0;
