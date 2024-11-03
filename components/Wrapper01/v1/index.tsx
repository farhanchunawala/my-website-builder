import { ReactNode } from "react";

interface ComponentProps {
    children: ReactNode;
    styles: React.CSSProperties;
}

const Wrapper: React.FC<ComponentProps> = ({
    children,
    styles,
}) => {
    return (
        <div style={styles}>
            {children}
        </div>
    );
};

export default Wrapper;
