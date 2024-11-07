import * as Link from "@/elements/Link01/v1/types";

type Data = Link.Data[];

type Styles = {
	container: React.CSSProperties;
	link: Link.Styles;
}

type Props = {
    data: Data;
	classNames?: string;
    styles: Styles;
}

export type { Data, Styles };
export default Props;
