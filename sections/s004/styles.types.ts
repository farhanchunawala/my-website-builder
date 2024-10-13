export interface Styles {
    container?: React.CSSProperties;
    textBlock?: object;
    cardGrid?: object;
}

export interface TextStyles {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
	content?: React.CSSProperties;
	cardGrid?: object;
}

export interface CustomStyles {
    styles: Styles;
    textStyles: TextStyles;
}
