import * as Text from "@/elements/Text01/v1/types";

type Data = {
	component: React.ElementType;
	content: string;
}[];

// type OptionalProperties<T> = {
//     [K in keyof T as {} extends Pick<T, K>
//         ? K
//         : never]: T[K] extends object
//         ? OptionalProperties<T[K]>
//         : T[K];
// };

type Styles = {
    container: React.CSSProperties;
    texts: React.CSSProperties[];
};

// type MyTypeOptionalProperties = OptionalProperties<TextBlockStyles>;

type Props = {
    classNames?: string;
    data: Data;
    styles: Styles;
};

export type { Data, Styles };
export default Props;
