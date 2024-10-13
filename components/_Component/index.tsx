import "./styles.module.scss";

interface ComponentProps {
	content?: {};
	style?: {
        container?: React.CSSProperties;
	};
	textStyles?: {};
}

const ComponentName: React.FC<ComponentProps> = ({
    content = {},
    style = {},
    textStyles = {},
}) => {
	return (
		<div className="componentName" style={style.container}>
			
		</div>
	);
}

export default ComponentName;
