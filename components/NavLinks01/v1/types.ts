
type Data = {
	content: string;
	link: string;
}[];

type Styles = {
	container: React.CSSProperties;
	link: React.CSSProperties;
}

type Props = {
    data: Data;
	classNames?: string;
    styles: Styles;
}

export type { Data, Styles };
export default Props;
