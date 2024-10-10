import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export const getCustomStyles = () => {
	const { isTablet, isDesktop } = useSelector((state: RootState) => state.responsive);

	return {
		
	};
};
