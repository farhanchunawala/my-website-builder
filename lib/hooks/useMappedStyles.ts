import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const useMappedStyles = (styles, styleKit) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return useMemo(() => {
        const result = {};

        // Iterate through the general styles
        Object.entries(styles).forEach(([key, value]) => {
            if (value !== null && typeof value !== "object") {
                const segments = value.split(".");

                if (segments[0] === "sp") {
                    result[key] =
                        styleKit?.[segments[0]]?.[segments[1]];
                } else {
                    result[key] = value;
                }
            }
        });

        // Iterate through device-specific styles
        if (styles[device]) {
            Object.entries(styles[device]).forEach(([key, value]) => {
                result[key] = value;
            });
        }

        return result;
    }, [styles, styleKit, device]);
};

export default useMappedStyles;
