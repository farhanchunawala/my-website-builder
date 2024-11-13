import * as TextBlock from "@/components/TextBlock01/v1/types";

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
    styles: Styles;
	id?: string
}

export type { Data, Styles }
export default Props
