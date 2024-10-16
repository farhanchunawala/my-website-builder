export interface Styles {
	container: React.CSSProperties;
	// title?: React.CSSProperties;
	// subtitle?: React.CSSProperties;
	// content?: React.CSSProperties;
}

export interface TextBlockProps {
    data: object;
	classNames?: string;
    styles: Styles;
}
