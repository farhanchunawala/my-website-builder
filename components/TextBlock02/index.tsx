import "./styles.scss";
import DOMPurify from "dompurify";

interface ComponentProps {
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	isHtml?: boolean;
    content: {
        title?: string;
        subtitle?: string;
        content?: string;
    };
    styles: {
        container?: React.CSSProperties;
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        content?: React.CSSProperties;
    };
    textStyles: {
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        content?: React.CSSProperties;
    };
}

const TextBlock: React.FC<ComponentProps> = ({
    headingLevel = "h3",
	isHtml = false,
    content,
    styles = {},
    textStyles = {},
}) => {
    const HeadingTag = headingLevel;

    return (
        <div className="textBlock02" style={styles.container}>
            <HeadingTag
                className="title"
                styles={{ ...styles.title, ...textStyles.title }}
                {...(!isHtml
                    ? { children: content.title }
                    : {
						dangerouslySetInnerHTML: {
							__html: DOMPurify.sanitize(content.title),
						},
					})}
            />
            <p
                className="subtitle"
                styles={{ ...styles.subtitle, ...textStyles.subtitle }}
            >
                {content.subtitle}
            </p>
            <p
                className="content"
                styles={{ ...styles.content, ...textStyles.content }}
            >
                {content.content}
            </p>
        </div>
    );
};

export default TextBlock;
