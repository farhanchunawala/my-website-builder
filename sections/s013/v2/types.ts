import * as NavLinks from "@/components/NavLinks/v1.1/types";
import * as Button from "@/elements/Button/v1.1/types";

interface Config {
	image: {
		width: number;
		height: number;
	};
	navlinks: [];
	button: object;
};

interface Content {
	imageUrl: string;
	navlinks: NavLinks.Data;
	buttonText: string;
};

interface Styles {
	container: React.CSSProperties;
	image:  React.CSSProperties;
	navlinks: NavLinks.Styles;
	button: Button.Styles;
}

interface Props {
	classNames?: string;
    config: Config;
    content: Content;
    styles: Styles | any;
}

export type { Config, Content, Styles }
export default Props
