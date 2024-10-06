// import { useResponsive } from "@/app/hooks/useResponsive";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const getCustomStyles = () => {
	// const { isTablet, isDesktop } = useResponsive();
	const { isTablet, isDesktop } = useSelector((state: RootState) => state.responsive);

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
