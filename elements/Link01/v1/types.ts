import { Typography } from '@/app/configs/global.types';

type Data = {
	content: string;
};

type Styles = Typography & React.CSSProperties

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles };
export default Props;
