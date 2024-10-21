import { Typography } from '@/app/configs/global.types';

interface ButtonData {
	content: string;
    // isHtml?: boolean;
}

interface ButtonStyles {
	container: Typography & React.CSSProperties & {
		color: string;
	};
	hover: React.CSSProperties;
}

interface ButtonProps {
    data: ButtonData;
    classNames?: string;
    styles: ButtonStyles;
}

export type { ButtonData, ButtonStyles, ButtonProps };
