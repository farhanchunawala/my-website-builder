import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const getCustomStyles = () => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

	const gap = isTablet || isDesktop ? "24px" : "8px";

    return {
        container: {
            margin: isTablet || isDesktop ? "0 auto" : "0 16px",
        },
        titles: {
			container: {},
            title: {},
            subtitle: {
                marginTop: isTablet || isDesktop ? "8px" : "2px",
            },
        },
        cardGrid: {
            container: {
                marginTop: "14px",
                marginBottom: "12px",
                gap: gap,
            },
            card: {
                backgroundColor: "#E5EDEE",
                // width: isTablet || isDesktop ? "280px" : "104px",
                height: isTablet || isDesktop ? "186px" : "96px",
                flexBasis: `calc((100% - ${gap} * 2) / 3)`,
            },
			heading: {},
        },
    };
};
