import "./styles.scss";

interface ComponentProps {
    content?: {
        text?: string;
    };
    classNames?: string;
    styles?: {
        container?: React.CSSProperties;
    };
    textStyles?: React.CSSProperties;
}

const Button: React.FC<ComponentProps> = ({
    content = {},
    classNames = "",
    styles = {},
    textStyles = {},
}) => {
    return (
        <div className="button01" style={{ ...styles.container, ...textStyles }}>
            {content.text}
        </div>
    );
};

export default Button;
