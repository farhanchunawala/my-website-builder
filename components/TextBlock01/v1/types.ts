import * as Text from "@/elements/Text01/v1/types";

type Data = Text.Data[];

// type OptionalProperties<T> = {
//     [K in keyof T as {} extends Pick<T, K>
//         ? K
//         : never]: T[K] extends object
//         ? OptionalProperties<T[K]>
//         : T[K];
// };

type Styles = {
    container: React.CSSProperties;
    texts: Text.Styles[];
};

// type MyTypeOptionalProperties = OptionalProperties<TextBlockStyles>;

type Props = {
    classNames?: string;
    data: Data;
    styles: Styles;
};

export type { Data, Styles };
export default Props;
