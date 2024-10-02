import "./Button.module.scss";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text,
	onClick,
	type = "button",
	className,
	disabled = false,
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={className}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
