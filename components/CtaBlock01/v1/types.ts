import * as TextBlock from "@/components/TextBlock01/v1/types";

type Config = {
	textBlock: TextBlock.Config;
	button: {
		size?: "small" | "medium" | "large",
		color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
	};
};

type Content = {
	textBlock: TextBlock.Content;
	buttonText: string;
	buttonLink?: string;
};

type Styles = {
	container: React.CSSProperties;
	textBlock: TextBlock.Styles;
	button: {
		container: React.CSSProperties;
	};
}

type Props = {
	config: Config;
    content: Content;
    styles: Styles;
}

export type { Config, Content, Styles }
export default Props;
