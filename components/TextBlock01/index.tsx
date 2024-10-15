import "./styles.scss";
import Text from "@/elements/Text01";

interface ComponentProps {
    content: {
        title?: string;
        subtitle?: string;
        content?: string;
    };
	classNames?: string;
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
	classNames = "",
    styles = {},
    textStyles = {},
}) => {
    return (
        <div className="textBlock01" style={styles.container}>
            {Object.entries(content).map(([key, value]) => (
                <Text
                    key={key}
                    as="p"
                    content={value}
					classNames={classNames}
                    styles={styles[key]}
                    textStyles={textStyles[key]}
                />
            ))}
        </div>
    );
};

export default TextBlock;
