import "./styles.scss";
import { getCustomStyles } from "./customStyles";
import data from "./data";

const Section0 = () => {
    const { styles } = getCustomStyles();
	
	return (
		<div className="s0 container" style={styles.container}>
			
		</div>
	);
}

export default Section0;
