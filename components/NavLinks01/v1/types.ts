import * as Hyperlink from "@/elements/Hyperlink01/v1/types";

type Data = Hyperlink.Data[];

type Styles = {
	container: React.CSSProperties;
	hyperlink: Hyperlink.Styles;
}

type Props = {
    data: Data;
	classNames?: string;
    styles: Styles;
}

export type { Data, Styles };
export default Props;
