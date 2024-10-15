import "./styles.scss";
import Text from "@/elements/Text01";
import { TextBlockProps } from "./types";

const TextBlock: React.FC<TextBlockProps> = ({
    data = [],
    classNames = "",
    styles = {},
}) => {
    return (
        <div className="textBlock01" style={styles.container}>
            {data.map((item, index) => (
                <Text
                    key={index}
                    tag={data[index]?.tag}
                    content={item.content}
                    classNames={classNames}
                    styles={styles[index]}
                    isHtml={data[index]?.isHtml}
                />
            ))}
        </div>
    );
};

export default TextBlock;
