import "./styles.scss";
import DOMPurify from "dompurify";
import type Props from "./types";

const Text: React.FC<Props> = ({
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
