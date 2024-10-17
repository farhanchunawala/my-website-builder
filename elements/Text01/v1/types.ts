interface TextData {
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    isHtml?: boolean;
    content: string;
}

type TextStyles = React.CSSProperties;

interface TextProps {
    data: TextData;
    classNames?: string;
    styles: TextStyles; // Use TextStyles here
}

export type { TextData, TextStyles, TextProps };
