import "./styles.scss";
import { HyperlinkProps } from "./types";

const Hyperlink: React.FC<HyperlinkProps> = ({
    data,
    classNames = "",
    styles,
}) => {
    return (
        <a className="hyperlink" style={styles}>
            {data.content}
        </a>
    );
};

export default Hyperlink;
