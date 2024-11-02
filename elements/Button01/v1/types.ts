import { Typography } from '@/app/configs/global.types';

type ButtonData = {
	content: string;
    // isHtml?: boolean;
}

type ButtonStyles = {
	container: Typography & React.CSSProperties & {
		color: string;
	};
	hover: React.CSSProperties;
}

type ButtonProps = {
    data: ButtonData;
    classNames?: string;
    styles: ButtonStyles;
}

export type { ButtonData, ButtonStyles, ButtonProps };
