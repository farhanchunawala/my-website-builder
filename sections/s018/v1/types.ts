import { TextData, TextStyles } from "@/elements/Text01/v1/types";
import { ButtonData, ButtonStyles } from "@/elements/Button01/v1/types";

type S018Data = {
	text1: TextData
	text2: TextData
	button: ButtonData
};

type S018Styles = {
	container: React.CSSProperties
	text1: TextStyles
	text2: TextStyles
	button: ButtonStyles
}

type S018Props = {
    data: S018Data;
	classNames?: string;
    styles: S018Styles;
}

export type { S018Data, S018Styles, S018Props }
