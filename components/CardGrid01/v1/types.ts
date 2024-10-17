import { TextBlockData, TextBlockStyles } from "../../TextBlock01/v1/types";

type CardGridData = {
	cards: {
		icon: string;
		textBlock: TextBlockData;
	}[];
}

type CardGridStyles = {
	container: {
		marginTop: string;
		marginBottom: string;
		gap: string;
	};
	card: {
		backgroundColor: string;
		aspectRatio: string;
		flexBasis: string;
		padding: string;
	};
	icon: {
		alignSelf: string;
	};
	textBlock: TextBlockStyles;
} | {
	container: React.CSSProperties;
	card: React.CSSProperties;
	icon: React.CSSProperties;
}

type CardGridProps = {
    data: CardGridData;
	classNames?: string;
    styles: CardGridStyles;
}

export type { CardGridData, CardGridStyles, CardGridProps }
