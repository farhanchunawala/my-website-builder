import "./styles.scss";
import DOMPurify from "dompurify";

interface ComponentProps {
	data?: {
		tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		isHtml?: boolean;
		content?: string;
	};
	classNames?: string;
	styles?: React.CSSProperties;
}

const Text: React.FC<ComponentProps> = ({
    data = {},
	classNames = "",
    styles = {},
}) => {
	const { tag = 'p', isHtml, content = "" } = data;
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
