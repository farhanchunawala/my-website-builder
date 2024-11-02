import { TextData, TextStyles } from "@/elements/Text01/v1/types";

type TextBlockData = TextData[];

// type OptionalProperties<T> = {
//     [K in keyof T as {} extends Pick<T, K>
//         ? K
//         : never]: T[K] extends object
//         ? OptionalProperties<T[K]>
//         : T[K];
// };

type TextBlockStyles = {
    container: React.CSSProperties;
    texts: TextStyles[];
};

// type MyTypeOptionalProperties = OptionalProperties<TextBlockStyles>;

type TextBlockProps = {
    data: TextBlockData;
    classNames?: string;
    styles: TextBlockStyles;
};

export type { TextBlockData, TextBlockStyles, TextBlockProps };
