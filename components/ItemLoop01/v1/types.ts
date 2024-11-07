import { ReactNode } from "react";

type Data = [];

type Styles = {
	container: React.CSSProperties;
}

type Props = {
	children: ReactNode
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
