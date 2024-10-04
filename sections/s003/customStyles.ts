import { useResponsive } from "@/app/hooks/useResponsive";

export const getCustomStyles = () => {
	const { isTablet, isDesktop } = useResponsive();

	return {
		container: {
			backgroundColor: "#fff",
		},
		planJourney: {
			backgroundColor: "#e5edee",
			height: isTablet || isDesktop ? "141px" : "75px",
		},
	};
};
