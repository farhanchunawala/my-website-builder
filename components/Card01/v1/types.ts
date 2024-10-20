import { TextBlockData, TextBlockStyles } from "../../TextBlock01/v1/types";

interface CardData {
	icon: string;
	textBlock: TextBlockData;
};

interface CardStyles {
	container: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: TextBlockStyles;
}

interface CardProps {
    data: CardData;
	classNames?: string;
    styles: CardStyles;
}

export type { CardData, CardStyles, CardProps }
