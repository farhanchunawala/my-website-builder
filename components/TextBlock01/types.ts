import { TextData, TextStyles } from '@/elements/Text01/types';

type TextBlockData = TextData[];

interface TextBlockStyles {
	container: React.CSSProperties;
	texts: TextStyles[];
}

interface TextBlockProps {
    data: TextBlockData;
	classNames?: string;
    styles: TextBlockStyles;
}

export type { TextBlockData, TextBlockStyles, TextBlockProps }
