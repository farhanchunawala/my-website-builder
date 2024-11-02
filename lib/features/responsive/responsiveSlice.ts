import { createSlice } from "@reduxjs/toolkit";

const getDeviceType = () => {
    if (typeof window !== "undefined") {
        const isMobile = window.matchMedia(
            "(max-width: 479px)"
        ).matches;
        const isTablet = window.matchMedia(
            "(min-width: 480px) and (max-width: 991px)"
        ).matches;
        const isDesktop = window.matchMedia(
            "(min-width: 992px)"
        ).matches;

        return { isMobile, isTablet, isDesktop };
    }

    return { isMobile: true, isTablet: false, isDesktop: false };
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
