import * as TextBlock from "@/components/TextBlock/v1.1/types";

type Config = {
	textBlock: TextBlock.Config;
	button: {
		size?: string,
		color?: string;
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
		container?: React.CSSProperties;
	};
}

type Props = {
	config: Config;
    content: Content;
    styles: Styles;
	styleKit: object;
	id: string | undefined;
}

export type { Config, Content, Styles }
export default Props;
