import * as TextBlock from "@/components/TextBlock01/v1/types";

interface Data {
	textBlock: TextBlock.Data
};

interface Styles {
	container: React.CSSProperties
	textBlock: TextBlock.Styles
	divider: React.CSSProperties
}

interface Props {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
