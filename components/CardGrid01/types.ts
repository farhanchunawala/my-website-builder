export interface Content {
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
    content: Content;
	classNames?: string;
    styles: Styles;
	config?: object;
}
