import "./styles.scss";
import DOMPurify from "dompurify";

interface ComponentProps {
    content: {
        title: string;
        subtitle?: string;
		content?: string;
    };
    style?: {
        container?: React.CSSProperties;
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
		content?: React.CSSProperties;
    };
    textStyles?: {
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
		content?: React.CSSProperties;
    };
}

const TextBlock: React.FC<ComponentProps> = ({
    content,
    style = {},
    textStyles = {},
}) => {
    return (
        <div className="textBlock01" style={style.container}>
            <h2
                className="title"
                style={{ ...style.title, ...textStyles.title }}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.title),
                }}
            />
            <p
                className="subtitle"
                style={{ ...style.subtitle, ...textStyles.subtitle }}
            >
                {content.subtitle}
            </p>
			<p
                className="content"
                style={{ ...style.content, ...textStyles.content }}
            >
                {content.content}
            </p>
        </div>
    );
};

export default TextBlock;
