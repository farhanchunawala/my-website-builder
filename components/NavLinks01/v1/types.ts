import { HyperlinkData, HyperlinkStyles } from "@/elements/Hyperlink01/v1/types";

type NavLinksData = HyperlinkData[];

type NavLinksStyles = {
	container: React.CSSProperties;
	hyperlink: HyperlinkStyles;
}

type NavLinksProps = {
    data: NavLinksData;
	classNames?: string;
    styles: NavLinksStyles;
}

export type { NavLinksData, NavLinksStyles, NavLinksProps }
