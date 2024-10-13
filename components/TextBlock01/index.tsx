import "./styles.scss";
import DOMPurify from "dompurify";

interface TextBlockProps {
    content?: {
        title?: string;
        subtitle?: string;
    };
    className?: {
        title?: string;
        subtitle?: string;
    };
    style?: {
        container?: React.CSSProperties;
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
    };
    textStyles?: {
        titleText?: React.CSSProperties;
        subtitleText?: React.CSSProperties;
    };
}

const TextBlock: React.FC<TextBlockProps> = ({
    content = {},
    className = {},
    style = {},
    textStyles = {},
}) => {
    return (
        <div className="textBlock01" style={style.container}>
            <h1
                className={`title ${className.title}`}
                style={{ ...style.title, ...textStyles.titleText }}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content.title),
                }}
            />
            <p
                className={`subtitle ${className.subtitle}`}
                style={{ ...style.subtitle, ...textStyles.subtitleText }}
            >
                {content.subtitle}
            </p>
        </div>
    );
};

export default TextBlock;
