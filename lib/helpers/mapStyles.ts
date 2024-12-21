type Styles = {
    imports?: string[];
    [key: string]:
        | string
        | null
        | undefined
        | Record<string, string | string[] | undefined>
        | string[];
};

type StyleKit = Record<string, Record<string, string | undefined>>;

type DeviceType = string | undefined;

export const mapStyles = (
    styles: Styles,
    styleKit: StyleKit,
    device: DeviceType
): Record<string, string | undefined> => {
    const result: Record<string, string | undefined> = {};

    // Helper function: Process Style Entries
    const processStyles = (
        styleEntries: Record<string, string | undefined>
    ) => {
        Object.entries(styleEntries).forEach(([key, value]) => {
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
                            styleKit?.[segments[0]]?.[segments[1]];
                    } else {
                        result[key] = value;
                    }
                }
            }
        });
    };

    // Helper function: Process Imports
    const processImports = (imports: string[]) => {
        imports.forEach((item: string) => {
            const segments = item.split(".");
            const importedStyles =
                styleKit?.[segments[0]]?.[segments[1]];

            if (importedStyles) {
                Object.entries(importedStyles).forEach(
                    ([key, value]) => {
                        result[key] = value;
                    }
                );
            }
        });
    };

    // Step 1: Process General Imports
    if (styles.imports) {
        processImports(styles.imports);
    }

    // Step 2: Process General Styles
    processStyles(styles as Record<string, string | undefined>);

    // Step 3: Process Device-Specific Styles
    const deviceStyles = styles[device as keyof Styles];
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
