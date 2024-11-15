import * as NavLinks from "@/components/NavLinks01/v1/types";
import * as Button from "@/elements/Button01/v1/types";

interface Data {
	navlinks: NavLinks.Data;
	button: Button.Data;
	image: {
		url: string;
		width: number;
		height: number;
	};
};

interface Styles {
	container: React.CSSProperties;
	image:  React.CSSProperties;
	navlinks: NavLinks.Styles;
	button: Button.Styles;
}

interface Props {
	classNames?: string;
    data: Data;
    styles: Styles | any;
}

export type { Data, Styles }
export default Props
