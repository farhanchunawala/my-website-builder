import "./styles.scss";

interface ComponentProps {
	content?: {};
	className?: string;
	style?: {
        container?: React.CSSProperties;
	};
	textStyles?: {};
}

const ComponentName: React.FC<ComponentProps> = ({
    content = {},
	className = "",
    style = {},
    textStyles = {},
}) => {
	return (
		<div className="componentName" style={style.container}>
			
		</div>
	);
}

export default ComponentName;
