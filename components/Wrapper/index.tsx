import styles from "./styles.module.scss";

export default function Wrapper({ children, customStyle }) {
    return (
        <div style={customStyle} >
            {children}
        </div>
    );
}
