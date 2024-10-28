import "./styles.scss";
import DOMPurify from "dompurify";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
    data,
	classNames = "",
    styles = {},
}) => {
	const { tag = 'p', isHtml = false, content = "" } = data || {};
    const Element = tag;
	
	return (
		<Element
			className={classNames}
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
