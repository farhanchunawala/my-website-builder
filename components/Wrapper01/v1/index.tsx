import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    styles: React.CSSProperties;
}

const Wrapper: React.FC<Props> = ({
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
