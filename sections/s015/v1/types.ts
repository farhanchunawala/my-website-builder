import { TextData, TextStyles } from "@/elements/Text01/v1/types";

interface S015Data {
	accentText: TextData
};

interface S015Styles {
	container: React.CSSProperties
	accentText: TextStyles
}

interface Section015Props {
    data: S015Data;
	classNames?: string;
    styles: S015Styles;
}

export type { S015Data, S015Styles, Section015Props }
