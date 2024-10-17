import "./styles.scss";

interface ComponentProps {
	content?: {};
	classNames?: string;
	styles?: {
        container?: React.CSSProperties;
	};
	textStyles?: {};
}

const ComponentName: React.FC<ComponentProps> = ({
    content = {},
	classNames = "",
    styles = {},
    textStyles = {},
}) => {
	return (
		<div className="componentName" style={container}>
			
		</div>
	);
}

export default ComponentName;
