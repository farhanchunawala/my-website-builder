// import "./styles.scss";

interface ComponentProps {
    data?: {
        text?: string;
    };
    classNames?: string;
    styles?: {
        container?: React.CSSProperties;
    };
    textStyles?: React.CSSProperties;
}

const Button: React.FC<ComponentProps> = ({
    data = {},
    classNames = "",
    styles = {},
}) => {
    return (
        <div className="button01" style={styles.container}>
            {data.text}
        </div>
    );
};

export default Button;
