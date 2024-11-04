import { TextData, TextStyles } from "@/elements/Text01/v1/types";
import { ButtonData, ButtonStyles } from "@/elements/Button01/v1/types";

interface S016Data {
	accentText: TextData
	heading: TextData
	subheading: TextData
	button: ButtonData
};

interface S016Styles {
	container: React.CSSProperties
	image: React.CSSProperties
	textContainer: React.CSSProperties
	accentText: TextStyles
	heading: TextStyles
	subheading: TextStyles
	button: ButtonStyles
}

interface Section016Props {
    data: S016Data;
	classNames?: string;
    styles: S016Styles;
}

export type { S016Data, S016Styles, Section016Props }
