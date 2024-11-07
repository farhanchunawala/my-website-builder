import * as Text from "@/elements/Text01/v1/types";
import * as Button from "@/elements/Button01/v1/types";

type Data = {
	text1: Text.Data
	text2: Text.Data
	button: Button.Data
};

type Styles = {
	container: React.CSSProperties
	text1: Text.Styles
	text2: Text.Styles
	button: Button.Styles
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
