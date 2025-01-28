

type Config = object[];

type Content = {
	text: string;
	link: string;
}[];

type Styles = {
	container: React.CSSProperties;
	link: React.CSSProperties;
}

type Props = {
	config: Config;
    content: Content;
	classNames?: string;
    styles: Styles;
}

export type { Config, Content, Styles };
export default Props;
