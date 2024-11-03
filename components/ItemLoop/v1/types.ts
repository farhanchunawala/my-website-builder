import { ReactNode } from "react";

type ItemLoopData = [];

type ItemLoopStyles = {
	container: React.CSSProperties;
}

type ItemLoopProps = {
	children: ReactNode
    data: ItemLoopData;
	classNames?: string;
    styles: ItemLoopStyles;
}

export type { ItemLoopData, ItemLoopStyles, ItemLoopProps }
