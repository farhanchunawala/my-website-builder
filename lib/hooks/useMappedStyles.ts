import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

type Styles = {
    [key: string]: string | null | undefined | Record<string, string>;
};

type StyleKit = Record<string, Record<string, string | undefined>>;

const useMappedStyles = (styles: Styles, styleKit: StyleKit) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return useMemo(() => {
        const result: Record<string, string | undefined> = {};

        // Iterate through the general styles
        Object.entries(styles).forEach(([key, value]) => {
            if (
                value !== null &&
                value !== undefined &&
                typeof value !== "object"
            ) {
                const segments = value.split(".");

                if (segments[0] === "scale") {
                    result[key] =
                        styleKit?.[segments[0]]?.[segments[1]];
                } else {
                    result[key] = value;
                }
            }
        });

        // Iterate through device-specific styles
        if (styles[device as keyof Styles]) {
            Object.entries(
                styles[device as keyof Styles] as Record<
                    string,
                    string
                >
            ).forEach(([key, value]) => {
                result[key] = value;
            });
        }

        return result;
    }, [styles, styleKit, device]);
};

export default useMappedStyles;
