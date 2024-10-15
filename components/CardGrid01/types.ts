export interface Data {
	cards: {
		icon: string;
		textBlock: string[];
	}[];
}

export interface Styles {
	container: React.CSSProperties;
	card: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: string[];
}

export interface ComponentProps {
    data: Data;
	classNames?: string;
    styles: Styles;
	config?: object;
}
