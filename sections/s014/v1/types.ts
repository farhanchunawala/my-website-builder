import { TextData, TextStyles } from "@/elements/Text01/v1/types";

interface S014Data {
	heading: TextData
	subheading: TextData
};

interface S014Styles {
	container: React.CSSProperties;
	heading: TextStyles
	subheading: TextStyles
}

interface Section014Props {
    data: S014Data;
	classNames?: string;
    styles: S014Styles;
}

export type { S014Data, S014Styles, Section014Props }
