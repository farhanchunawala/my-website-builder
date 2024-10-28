import { TextBlockData, TextBlockStyles } from "@/components/TextBlock01/v1/types";

interface S014Data {
	textBlock: TextBlockData
};

interface S014Styles {
	container: React.CSSProperties;
	textBlock: TextBlockStyles
}

interface Section014Props {
    data: S014Data;
	classNames?: string;
    styles: S014Styles;
}

export type { S014Data, S014Styles, Section014Props }
