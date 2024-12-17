type Styles = {
    imports?: string[];
    [key: string]:
        | string
        | null
        | undefined
        | Record<string, string>
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

    // Iterate through the array of imports
    if (styles.imports) {
        styles.imports.forEach((importKey: string) => {
            const importedStyles = styleKit[importKey];
            if (importedStyles) {
                Object.entries(importedStyles).forEach(
                    ([key, value]) => {
                        result[key] = value;
                    }
                );
            }
        });
    }

    // Iterate through the general styles
    Object.entries(styles).forEach(([key, value]) => {
        if (
            value !== null &&
            value !== undefined &&
            typeof value !== "object"
        ) {
            const segments = value.split(".");

            if (segments[0] === "scale") {
                result[key] = styleKit?.[segments[0]]?.[segments[1]];
            } else {
                result[key] = value;
            }
        }
    });

    // Iterate through device-specific styles
    if (styles[device as keyof Styles]) {
        Object.entries(
            styles[device as keyof Styles] as Record<string, string>
        ).forEach(([key, value]) => {
            result[key] = value;
        });
    }

    return result;
};
