import { Typography } from '@/app/configs/global.types';

type TextData = {
    tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    isHtml: boolean;
    content: string;
}

type TextStyles = Typography & React.CSSProperties & {
	color: string;
	textAlign?: React.CSSProperties['textAlign'];
}

type TextProps = {
    data: TextData;
    classNames?: string;
    styles: TextStyles;
}

export type { TextData, TextStyles, TextProps };
