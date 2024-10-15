import "./styles.scss";
import DOMPurify from "dompurify";

interface ComponentProps {
	tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	content?: string;
	classNames?: string;
	styles?: React.CSSProperties;
	isHtml?: boolean;
}

const Text: React.FC<ComponentProps> = ({
	tag: tag = "p",
    content = "",
	classNames = "",
    styles = {},
	isHtml = false,
}) => {
    const Element = tag;
	
	return (
		<Element
			className={`text01 ${classNames}`}
			style={styles}
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
