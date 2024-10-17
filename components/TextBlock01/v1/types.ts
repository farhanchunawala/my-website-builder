import { TextData, TextStyles } from '@/elements/Text01/v1/types';

type TextBlockData = TextData[];

type TextBlockStyles = {
	container: React.CSSProperties;
	texts: TextStyles[];
}

type TextBlockProps = {
    data: TextBlockData;
	classNames?: string;
    styles: TextBlockStyles;
}

export type { TextBlockData, TextBlockStyles, TextBlockProps }
