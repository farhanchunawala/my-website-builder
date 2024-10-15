import "./styles.scss";
import DOMPurify from "dompurify";
import Text from "@/elements/Text01";

interface ComponentProps {
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
    content,
    styles = {},
    textStyles = {},
}) => {
    return (
        <div className="textBlock01" style={styles.container}>
            <Text
                as="h2"
                content={content.title}
                styles={styles.title}
                textStyles={textStyles.title}
                isHtml
            />
            <Text
                as="p"
                content={content.subtitle}
                styles={styles.subtitle}
                textStyles={textStyles.subtitle}
            />
            <Text
                as="p"
                content={content.content}
                styles={styles.content}
                textStyles={textStyles.content}
            />
        </div>
    );
};

export default TextBlock;
