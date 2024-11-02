import { TextBlockData, TextBlockStyles } from "@/components/TextBlock01/v1/types";

interface S017Data {
	textBlock: TextBlockData,
	columns: TextBlockData[],
};

interface S017Styles {
	container: React.CSSProperties,
	textBlock: TextBlockStyles,
	columns: {
		container: React.CSSProperties,
		textBlock: TextBlockStyles
	}
}

interface Section017Props {
    data: S017Data;
	classNames?: string;
    styles: S017Styles;
}

export type { S017Data, S017Styles, Section017Props }
