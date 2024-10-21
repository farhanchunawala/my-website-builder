import "./styles.scss";
import { ComponentProps } from "./types";

const ComponentName: React.FC<ComponentProps> = ({
    data = {},
	classNames = "",
    styles = {},
}) => {
	return (
		<div className="componentName" style={container}>
			
		</div>
	);
}

export default ComponentName;
