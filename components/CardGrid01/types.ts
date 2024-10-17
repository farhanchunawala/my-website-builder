import { TextBlockData, TextBlockStyles } from "../TextBlock01/types";

interface CardGridData {
	cards: {
		icon: string;
		textBlock: TextBlockData;
	}[];
}

interface CardGridStyles {
	container: React.CSSProperties;
	card: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: TextBlockStyles;
}

interface CardGridProps {
    data: CardGridData;
	classNames?: string;
    styles: CardGridStyles;
}

export type { CardGridData, CardGridStyles, CardGridProps }
