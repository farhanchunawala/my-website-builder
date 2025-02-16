import * as CtaBlock from "@/components/CtaBlock/v1.1/types";

interface Config {
	ctaBlock: CtaBlock.Config
};

interface Content {
	backgroundImage: string
	ctaBlock: CtaBlock.Content
};

interface Styles {
	container: React.CSSProperties;
	image: React.CSSProperties;
	ctaBlock: CtaBlock.Styles
}

interface Props {
	config: Config;
	content: Content;
    styles: Styles | any;
	id?: string
}

export type { Config, Content, Styles }
export default Props
