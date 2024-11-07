import "./styles.scss";
import type Props from "./types";

const Hyperlink: React.FC<Props> = ({
    data,
    styles,
}) => {
    return (
        <a className="hyperlink" style={styles}>
            {data.content}
        </a>
    );
};

export default Hyperlink;
