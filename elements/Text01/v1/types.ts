import { Typography } from '@/app/configs/global.types';

type TextData = {
    tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    isHtml: boolean;
    content: string;
}

interface TextStyles extends Typography {
	color: React.CSSProperties['color'];
	opacity?: React.CSSProperties['opacity'];
	textAlign?: React.CSSProperties['textAlign'];
}

// type TextStyles = Typography & React.CSSProperties & {
// 	color: string;
// 	textAlign?: React.CSSProperties['textAlign'];
// }

type TextProps = {
    data: TextData;
    classNames?: string;
    styles: TextStyles;
}

export type { TextData, TextStyles, TextProps };
