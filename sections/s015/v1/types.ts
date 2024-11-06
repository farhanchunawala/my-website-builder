import { TextData, TextStyles } from "@/elements/Text01/v1/types";

interface S015Data {
	accentText: TextData
	heading: TextData
};

interface S015Styles {
	container: React.CSSProperties
	textContainer: React.CSSProperties
	accentText: TextStyles
	heading: TextStyles
	vector: React.CSSProperties
}

interface Section015Props {
    data: S015Data;
	classNames?: string;
    styles: S015Styles;
}

export type { S015Data, S015Styles, Section015Props }
