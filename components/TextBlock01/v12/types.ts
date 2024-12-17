
type Config = {
	element: string;
}[];

type Content = string[];

type Styles = {
    container: Record<string, any>;
    texts: Record<string, any>[];
};

type Props = {
    config: Config;
    content: Content;
    styles: Styles;
	styleKit: Record<string, any>;
};

export type { Config, Content, Styles };
export default Props;
