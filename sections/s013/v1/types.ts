import { NavLinksData, NavLinksStyles } from "@/components/NavLinks01/v1/types";
import { ButtonData, ButtonStyles } from "@/elements/Button01/v1/types";

interface S013Data {
	navlinks: NavLinksData;
	button: ButtonData;
};

interface S013Styles {
	container: React.CSSProperties;
	navlinks: NavLinksStyles;
	button: ButtonStyles;
}

interface Section013Props {
    data: S013Data;
	classNames?: string;
    styles: S013Styles;
}

export type { S013Data, S013Styles, Section013Props }
