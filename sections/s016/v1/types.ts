import * as Text from "@/elements/Text01/v1/types";
import * as Button from "@/elements/Button01/v1/types";
import * as CtaBlock from "@/components/CtaBlock01/v1/types";

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
    styles: Styles;
	configs?: {
		pageUrl: string
	}
}

export type { Data, Styles }
export default Props
