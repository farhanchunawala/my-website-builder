import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

type StyleProps = {
    imports?: string[];
    [key: string]:
        | string
        | null
        | undefined
        | Record<string, string | string[] | undefined>
        | string[];
};

export const useMapStyles = () => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );
    const { styleKit } = useSelector(
        (state: RootState) => state.data.data
    );
    const mapStyles = useMemo(() => {
        return (styleProps: StyleProps): Record<string, string | undefined> => {
            const result: Record<string, string | undefined> = {};

            // Helper function: Process Style Entries
            const processStyles = (
                styleEntries:
                    | Record<string, string | undefined>
                    | undefined
            ) => {
                if (!styleEntries || typeof styleEntries !== "object")
                    return;

                Object.entries(styleEntries).forEach(
                    ([key, value]) => {
                        if (key !== "imports") {
                            if (typeof value === "string") {
                                const segments = value.split(".");
                                if (
                                    segments[0] === "tokens" ||
                                    segments[0] === "colors" ||
                                    segments[0] === "scale" ||
                                    segments[0] === "layout"
                                ) {
                                    result[key] =
                                        styleKit?.[segments[0]]?.[
                                            segments[1]
                                        ];
                                } else {
                                    result[key] = value;
                                }
                            }
                        }
                    }
                );
            };

            // Helper function: Process Imports
            const processImports = (
                imports: string[] | undefined
            ) => {
                if (!imports) return;

                imports.forEach((item: string) => {
                    const segments = item.split(".");
                    const importedStyles =
                        styleKit?.[segments[0]]?.[segments[1]];

                    if (importedStyles) {
                        Object.entries(importedStyles).forEach(
                            ([key, value]) => {
                                result[key] = value as
                                    | string
                                    | undefined;
                            }
                        );
                    }
                });
            };

            // Step 1: Process General Imports
            if (styleProps?.imports) {
                processImports(styleProps.imports);
            }

            // Step 2: Process General Styles
            processStyles(
                styleProps as Record<string, string | undefined>
            );

            // Step 3: Process Device-Specific Styles
            const deviceStyles =
                styleProps?.[device as keyof StyleProps];
            if (
                deviceStyles &&
                !Array.isArray(deviceStyles) &&
                typeof deviceStyles === "object"
            ) {
                // Step 3.1: Process Device-Specific Imports
                if (Array.isArray(deviceStyles.imports)) {
                    processImports(deviceStyles.imports as string[]);
                }

                // Step 3.2: Process Device-Specific Styles
                processStyles(
                    deviceStyles as Record<string, string | undefined>
                );
            }

            return result;
        };
    }, [device, styleKit]);

    return { mapStyles };
};
