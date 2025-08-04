export interface CSSProperty {
    displayname: string;
	category: string;
    values: string[];
    units: string[];
    defaultValue: string;
	inputType: "string" | "text" | "select";
	placeholder?: string;
	helpText?: string;
	show: boolean;
	active: boolean;
}

export interface CSSTextProperties {
    fontFamily: CSSProperty;
    fontSize: CSSProperty;
    fontWeight: CSSProperty;
    fontStyle: CSSProperty;
    fontVariant: CSSProperty;
    fontStretch: CSSProperty;
	lineHeight: CSSProperty;
}
