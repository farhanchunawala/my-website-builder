import { useState, useEffect } from "react";

const getDeviceType = () => {
	const isTablet = window.matchMedia(
		"(min-width: 769px) and (max-width: 1024px)"
	).matches;
	const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

	return { isMobile: !isTablet && !isDesktop, isTablet, isDesktop };
};

export const useResponsive = () => {
	const [deviceType, setDeviceType] = useState(getDeviceType); // Initialize state directly with the current screen size

	useEffect(() => {
		const tabletQuery = window.matchMedia(
			"(min-width: 769px) and (max-width: 1024px)"
		);
		const desktopQuery = window.matchMedia("(min-width: 1025px)");

		const handleResize = () => {
			setDeviceType(getDeviceType()); // Update the state when the window is resized
		};

		tabletQuery.addEventListener("change", handleResize);
		desktopQuery.addEventListener("change", handleResize);

		return () => {
			tabletQuery.removeEventListener("change", handleResize);
			desktopQuery.removeEventListener("change", handleResize);
		};
	}, []);

	return deviceType; // { isMobile, isTablet, isDesktop }
};
