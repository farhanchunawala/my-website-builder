import * as TextBlock from "@/components/TextBlock/v1.1/types";

type Data = {
	textBlock: TextBlock.Data,
	columns: TextBlock.Data[],
};

type Styles = {
	container: React.CSSProperties,
	textBlock: TextBlock.Styles,
	columns: {
		container: React.CSSProperties,
		textBlock: TextBlock.Styles
	}
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles | any;
	id?: string
}

export type { Data, Styles }
export default Props
