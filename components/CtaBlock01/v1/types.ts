import * as TextBlock from "@/components/TextBlock01/v1/types";
import * as Button from "@/elements/Button01/v1/types";

type Data = {
	textBlock: TextBlock.Data;
	button: Button.Data;
};

type Styles = {
	container: React.CSSProperties;
	textBlock: TextBlock.Styles;
	button: Button.Styles;
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props;
