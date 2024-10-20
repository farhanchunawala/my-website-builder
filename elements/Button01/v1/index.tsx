import "./styles.scss";
import DOMPurify from "dompurify";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    data,
    classNames = "",
    styles = {},
}) => {
    return (
        <div className={`button01 ${classNames}`} style={styles}>
            {data.content}
        </div>
    );
};

export default Button;
