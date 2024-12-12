
type Config = {
	element: React.ElementType;
}[];

type Content = string[];

type Styles = {
    container: React.CSSProperties;
    texts: React.CSSProperties[];
};

type Props = {
    config: Config;
    content: Content;
    styles: Styles;
};

export type { Config, Content, Styles };
export default Props;
