

type Data = {
	x: string
};

type Styles = {
	container: React.CSSProperties;
}

type Props = {
	classNames?: string;
    data: Data;
    styles: Styles;
}

export type { Data, Styles }
export default Props
