import * as Text from "@/elements/Text01/v1/types";
import * as Button from "@/elements/Button01/v1/types";

interface Data {
	accentText: Text.Data
	heading: Text.Data
	subheading: Text.Data
	button: Button.Data
};

interface Styles {
	container: React.CSSProperties
	image: React.CSSProperties
	textContainer: React.CSSProperties
	accentText: Text.Styles
	heading: Text.Styles
	subheading: Text.Styles
	button: Button.Styles
}

interface Props {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
