// responsiveSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const getDeviceType = () => {
	const isTablet = window.matchMedia(
		"(min-width: 769px) and (max-width: 1024px)"
	).matches;
	const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

	return { isMobile: !isTablet && !isDesktop, isTablet, isDesktop };
};

const initialState = getDeviceType();

const responsiveSlice = createSlice({
	name: "responsive",
	initialState,
	reducers: {
		updateDeviceType: (state) => {
			const { isMobile, isTablet, isDesktop } = getDeviceType();
			state.isMobile = isMobile;
			state.isTablet = isTablet;
			state.isDesktop = isDesktop;
		},
	},
});

export const { updateDeviceType } = responsiveSlice.actions;
export default responsiveSlice;