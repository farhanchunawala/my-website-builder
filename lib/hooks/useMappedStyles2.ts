import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const useMappedStyles = (styles, styleKit) => {
    const device = useSelector(
        (state: RootState) => state.responsive.device
    );

    return useMemo(() => {
        const result = {};

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== null && typeof value !== "object") {
                result[key] = value;
            }
        });

        Object.entries(styles.css).forEach(([key, value]) => {
            result[key] = value;
        });

        Object.entries(styles[device]).forEach(([key, value]) => {
            if (value !== null && typeof value !== "object") {
                result[key] = value;
            }
        });

        Object.entries(styles[device].css).forEach(([key, value]) => {
            result[key] = value;
        });

        // Object.entries(styles).forEach(([key, value]) => {
        //     if (key === "css") {
        //         Object.assign(result, value);
        //     } else if (key === "tablet" || key === "desktop") {
        //         if (key === device) {
        //             Object.entries(value).forEach(
        //                 ([nestedKey, nestedValue]) => {
        //                     if (nestedKey === "css") {
        //                         Object.assign(
        //                             result,
        //                             nestedValue || {}
        //                         );
        //                     } else {
        //                         result[nestedKey] =
        //                             styleKit?.sp?.[nestedValue];
        //                     }
        //                 }
        //             );
        //         }
        //     } else {
        //         result[key] = styleKit?.sp?.[value];
        //     }
        // });

        return result;
    }, [styles, styleKit, device]);
};

export default useMappedStyles;
