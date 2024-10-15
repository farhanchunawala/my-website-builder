import { ReactNode } from "react";
import "./styles.scss";

interface ComponentProps {
    children?: ReactNode;
    classNames?: string;
    styles?: React.CSSProperties;
}

const Wrapper: React.FC<ComponentProps> = ({
    children,
    classNames = "",
    styles = {},
}) => {
    return (
        <div className={`wrapper01 ${classNames}`} style={styles}>
            {children}
        </div>
    );
};

export default Wrapper;
