import { TextBlockData, TextBlockStyles } from "../../TextBlock01/v1/types";

type FlexGridData = {
	cards: {
		icon: string;
		textBlock: TextBlockData;
	}[];
}

type FlexGridStyles = {
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
	textBlock: TextBlockStyles;
}

type FlexGridProps = {
    data: FlexGridData;
	classNames?: string;
    styles: FlexGridStyles;
}

export type { FlexGridData, FlexGridStyles, FlexGridProps }
