import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { updateDeviceType } from "@/lib/features/responsive/responsiveSlice";

export const useResponsive = () => {
    const dispatch = useDispatch();
    const { isMobile, isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

    useEffect(() => {
        const handleResize = () => {
            dispatch(updateDeviceType());
        };

		const desktopQuery = window.matchMedia("(min-width: 992px)");
        const tabletQuery = window.matchMedia(
            "(min-width: 480px) and (max-width: 991px)"
        );

		// Add event listeners
        tabletQuery.addEventListener("change", handleResize);
        desktopQuery.addEventListener("change", handleResize);

        // Initial update
        handleResize();

        return () => {
			// Cleanup event listeners
            tabletQuery.removeEventListener("change", handleResize);
            desktopQuery.removeEventListener("change", handleResize);
        };
    }, [dispatch]);

    // Responsive function that returns the value based on the device type
    const responsive = (
        mobileValue: string,
        tabletValue?: string,
        desktopValue?: string
    ) => {
        if (isDesktop && desktopValue !== undefined) {
            return desktopValue;
        }
        if (isTablet && tabletValue !== undefined) {
            return tabletValue;
        }
        return mobileValue;
    };

    // const responsive = (mobileValue: string, tabletValue?: string, desktopValue?: string) => {
    // 	return isDesktop ? desktopValue : isTablet ? tabletValue : mobileValue;
    // };

    return { responsive, isMobile, isTablet, isDesktop };
};
