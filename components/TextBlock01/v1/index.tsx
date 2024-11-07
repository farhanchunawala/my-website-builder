import "./styles.scss";
import Text from "@/elements/Text01/v1";
import type Props from "./types";

const TextBlock: React.FC<Props> = ({
    data = [],
    classNames = "",
    styles = {
        container: {},
        texts: [],
    },
}) => {
    return (
        <div className="textBlock01" style={styles.container}>
            {data.map((item, index) => (
                <Text
                    key={index}
                    data={item}
                    classNames={classNames}
                    styles={styles.texts[index]}
                />
            ))}
        </div>
    );
};

export default TextBlock;
