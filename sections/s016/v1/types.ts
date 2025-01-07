import * as CtaBlock from "@/components/CtaBlock/v1.1/types";

interface Data {
	imageUrl: string,
	ctaBlock: CtaBlock.Data
};

interface Styles {
	container: React.CSSProperties
	image: React.CSSProperties
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
