import { TextBlockData, TextBlockStyles } from "../../TextBlock01/v1/types";

type CardData = {
	icon: string;
	textBlock: TextBlockData;
};

type CardStyles = {
	container: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: TextBlockStyles;
}

type CardProps = {
    data: CardData;
	classNames?: string;
    styles: CardStyles;
}

export type { CardData, CardStyles, CardProps }
