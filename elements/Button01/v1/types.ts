import { Typography } from '@/app/configs/global.types';

interface ButtonData {
	content: string;
    // isHtml?: boolean;
}

type ButtonStyles = Typography & React.CSSProperties & {
	color: string;
}

interface ButtonProps {
    data: ButtonData;
    classNames?: string;
    styles: ButtonStyles;
}

export type { ButtonData, ButtonStyles, ButtonProps };
