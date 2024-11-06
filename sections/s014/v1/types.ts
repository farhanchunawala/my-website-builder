import { TextData, TextStyles } from "@/elements/Text01/v1/types";
import { ButtonData, ButtonStyles } from "@/elements/Button01/v1/types";

interface S014Data {
	heading: TextData
	subheading: TextData
	button: ButtonData
};

interface S014Styles {
	container: React.CSSProperties;
	backGround: React.CSSProperties
	heading: TextStyles
	subheading: TextStyles
	button: ButtonStyles
}

interface Section014Props {
    data: S014Data;
	classNames?: string;
    styles: S014Styles;
}

export type { S014Data, S014Styles, Section014Props }
