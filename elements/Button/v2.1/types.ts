import { Typography } from '@/app/configs/global.types';

type Data = {
	content: string;
    // isHtml?: boolean;
}

type Styles = {
	container: Typography & React.CSSProperties & {
		color: string;
	};
	hover: React.CSSProperties;
}

type Props = {
    data: Data;
    classNames?: string;
    styles: Styles;
}

export type { Data, Styles }
export default Props
