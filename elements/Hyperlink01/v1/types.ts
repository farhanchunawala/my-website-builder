import { Typography } from '@/app/configs/global.types';

type HyperlinkData = {
	content: string;
};

type HyperlinkStyles = Typography & React.CSSProperties

type HyperlinkProps = {
    data: HyperlinkData;
	classNames?: string;
    styles: HyperlinkStyles;
}

export type { HyperlinkData, HyperlinkStyles, HyperlinkProps }
