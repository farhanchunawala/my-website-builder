import "./styles.scss";

interface ComponentProps {
    content?: {
        text?: string;
    };
    className?: string;
    style?: {
        container?: React.CSSProperties;
    };
    textStyles?: React.CSSProperties;
}

const Button: React.FC<ComponentProps> = ({
    content = {},
    className = "",
    style = {},
    textStyles = {},
}) => {
    return (
        <div className="button01" style={{ ...style.container, ...textStyles }}>
            {content.text}
        </div>
    );
};

export default Button;
