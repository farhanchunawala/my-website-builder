export interface Styles {
    container: {
        maxWidth: string;
        margin: string;
    };
    textBlock: {
        container: Record<string, unknown>;
        title: Record<string, unknown>;
        subtitle: {
            marginTop: string;
            maxWidth: string;
            margin: string;
        };
    };
    cardGrid: {
        container: {
            marginTop: string;
            marginBottom: string;
            gap: string;
        };
        card: {
            backgroundColor: string;
            height: string;
            flexBasis: string;
        };
        textBlock: Record<string, unknown>;
    };
}

export interface TextStyles {
    titleText: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        letterSpacing: string;
        color: string;
    };
    subtitleText: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        color: string;
        lineHeight: string;
    };
}

// Return type for the function
export interface CustomStyles {
    styles: Styles;
    textStyles: TextStyles;
}
