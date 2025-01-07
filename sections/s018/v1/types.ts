import * as CtaBlock from "@/components/CtaBlock/v1.1/types";

type Data = {
	ctaBlock: CtaBlock.Data
};

type Styles = {
	container: React.CSSProperties
	ctaBlock: CtaBlock.Styles
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles | any;
	id?: string
}

export type { Data, Styles }
export default Props
