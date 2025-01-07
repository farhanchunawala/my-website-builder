import * as TextBlock from "../../TextBlock/v1.1/types";

type Data = {
	cards: {
		icon: string;
		textBlock: TextBlock.Data;
	}[];
}

type Styles = {
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
	textBlock: TextBlock.Styles;
} | {
	container: React.CSSProperties;
	card: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: TextBlock.Styles;
}

type Props = {
    data: Data;
	classNames?: string;
    styles: Styles;
}

export type { Data, Styles }
export default Props
