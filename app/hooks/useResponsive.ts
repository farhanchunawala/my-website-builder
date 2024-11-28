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

        const mobileQuery = window.matchMedia(
			"(max-width: 479px)"
        );
        const tabletQuery = window.matchMedia(
			"(min-width: 480px) and (max-width: 991px)"
        );
		const desktopQuery = window.matchMedia("(min-width: 992px)");

        // Add event listeners
        mobileQuery.addEventListener("change", handleResize);
        tabletQuery.addEventListener("change", handleResize);
        desktopQuery.addEventListener("change", handleResize);

        // Initial update
        handleResize();

        return () => {
            // Cleanup event listeners
            mobileQuery.removeEventListener("change", handleResize);
            tabletQuery.removeEventListener("change", handleResize);
            desktopQuery.removeEventListener("change", handleResize);
        };
    }, [dispatch]);

    const responsive = <T extends string | number | object>(
        mobileValue: T,
        tabletValue: T,
        desktopValue: T
    ): T => {
        return isMobile ? mobileValue
            : isTablet ? tabletValue
			: desktopValue;
    };

    return { responsive, isMobile, isTablet, isDesktop };
};
