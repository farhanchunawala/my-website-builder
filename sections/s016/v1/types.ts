import { TextData } from "@/elements/Text01/v1/types";
import { ButtonData } from "@/elements/Button01/v1/types";

interface S016Data {
	accentText: TextData
	heading: TextData
	subheading: TextData
	button: ButtonData
};

interface S016Styles {
	container: React.CSSProperties
}

interface Section016Props {
    data: S016Data;
	classNames?: string;
    styles: S016Styles;
}

export type { S016Data, S016Styles, Section016Props }
