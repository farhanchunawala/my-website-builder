import { Typography } from '@/app/configs/global.types';

interface HyperlinkData {
	content: string;
};

type HyperlinkStyles = Typography & React.CSSProperties

interface HyperlinkProps {
    data: HyperlinkData;
	classNames?: string;
    styles: HyperlinkStyles;
}

export type { HyperlinkData, HyperlinkStyles, HyperlinkProps }
