
type ComponentData = {};

interface ComponentStyles {
	container: React.CSSProperties;
}

interface ComponentProps {
    data: ComponentData;
	classNames?: string;
    styles: ComponentStyles;
}

export type { ComponentData, ComponentStyles, ComponentProps }
