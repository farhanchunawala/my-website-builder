import { ReactNode } from "react";
import "./styles.scss";

interface ComponentProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Wrapper: React.FC<ComponentProps> = ({
    children,
    className = "",
    style = {},
}) => {
    return (
        <div className={`wrapper01 ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Wrapper;
