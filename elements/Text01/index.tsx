import "./styles.scss";
import DOMPurify from "dompurify";

interface ComponentProps {
	as: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	content?: string;
	classNames?: string;
	styles?: React.CSSProperties;
	textStyles?: React.CSSProperties;
	isHtml?: boolean;
}

const Text: React.FC<ComponentProps> = ({
	as: as = "p",
    content = "",
	classNames = "",
    styles = {},
    textStyles = {},
	isHtml = false,
}) => {
    const Tag = as;
	
	return (
		<Tag
			className={`text01 ${className}`}
			style={{ ...styles, ...textStyles }}
			{...(isHtml
				? {
					dangerouslySetInnerHTML: {
						__html: DOMPurify.sanitize(content),
					},
				}
				: { children: content })}
		/>
	);
}

export default Text;
