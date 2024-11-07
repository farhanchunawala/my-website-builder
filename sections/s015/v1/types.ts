import * as Text from "@/elements/Text01/v1/types";

interface Data {
	accentText: Text.Data
	heading: Text.Data
};

interface Styles {
	container: React.CSSProperties
	textContainer: React.CSSProperties
	accentText: Text.Styles
	heading: Text.Styles
	vector: React.CSSProperties
}

interface Props {
    data: Data;
	classNames?: string;
    styles: Styles;
}

export type { Data, Styles }
export default Props
