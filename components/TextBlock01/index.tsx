import "./styles.scss";
import Text from "@/elements/Text01";
import { TextBlockProps } from "./types";

const TextBlock: React.FC<TextBlockProps> = ({
    content = [],
    classNames = "",
    styles = {},
    config = {},
}) => {
    return (
        <div className="textBlock01" style={styles.container}>
            {content.map((item, index) => (
                <Text
                    key={index}
                    tag={config[index]?.tag}
                    content={item}
                    classNames={classNames}
                    styles={styles[index]}
                    isHtml={config[index]?.isHtml}
                />
            ))}
        </div>
    );
};

export default TextBlock;
