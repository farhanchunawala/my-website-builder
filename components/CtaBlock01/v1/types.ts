import * as TextBlock from "@/components/TextBlock01/v1/types";

type Data = {
	textBlock: TextBlock.Data;
	button: {
		content: string;
		link: string;
		size?: "small" | "medium" | "large",
		color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
	};
};

type Styles = {
	container: React.CSSProperties;
	textBlock: TextBlock.Styles;
	button: {
		container: React.CSSProperties;
	};
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props;
