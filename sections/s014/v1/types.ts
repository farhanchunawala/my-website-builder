import * as CtaBlock from "@/components/CtaBlock01/v1/types";

interface Data {
	ctaBlock: CtaBlock.Data
};

interface Styles {
	container: React.CSSProperties;
	ctaBlock: CtaBlock.Styles
}

interface Props {
	classNames?: string;
    data: Data;
    styles: Styles | any;
	id?: string
}

export type { Data, Styles }
export default Props
