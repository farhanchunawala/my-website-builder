// useResponsive.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDeviceType } from "@/lib/features/responsive/responsiveSlice";

export const useResponsive = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleResize = () => {
			dispatch(updateDeviceType());
		};

		const tabletQuery = window.matchMedia(
			"(min-width: 769px) and (max-width: 1024px)"
		);
		const desktopQuery = window.matchMedia("(min-width: 1025px)");

		tabletQuery.addEventListener("change", handleResize);
		desktopQuery.addEventListener("change", handleResize);

		// Initial update
		handleResize();

		return () => {
			tabletQuery.removeEventListener("change", handleResize);
			desktopQuery.removeEventListener("change", handleResize);
		};
	}, [dispatch]);

	return null; // No need to return anything since state is now in Redux
};
