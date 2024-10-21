import "./styles.scss";
// import DOMPurify from "dompurify";
import { ButtonProps } from "./types";
import { useState } from "react";

const Button: React.FC<ButtonProps> = ({
    data,
    classNames = "",
    styles = {
        container: {},
        hover: {},
    },
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverStyles = isHovered ? styles.hover : {};

    return (
        <button
            className={`button01 ${classNames}`}
            style={{
                ...styles.container,
                ...hoverStyles,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {data.content}
        </button>
    );
};

export default Button;
