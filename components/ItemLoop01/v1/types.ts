import { ReactElement } from "react";

type Data = [];

type Styles = {
	container: React.CSSProperties;
}

type ChildProps = {
	item: Record<string, unknown>; // Adjust this based on the exact structure of your data
};

type Props = {
	children: ReactElement<ChildProps>;
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
