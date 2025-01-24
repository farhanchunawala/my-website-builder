import * as TextBlock from "../../TextBlock/v1.1/types";

type Data = {
	icon: string;
	textBlock: TextBlock.Data;
};

type Styles = {
	container: React.CSSProperties;
	icon: React.CSSProperties;
	textBlock: TextBlock.Styles;
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
