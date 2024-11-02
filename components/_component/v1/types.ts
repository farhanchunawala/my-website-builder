
type ComponentData = {};

type ComponentStyles = {
	container: React.CSSProperties;
}

type ComponentProps = {
    data: ComponentData;
	classNames?: string;
    styles: ComponentStyles;
}

export type { ComponentData, ComponentStyles, ComponentProps }
