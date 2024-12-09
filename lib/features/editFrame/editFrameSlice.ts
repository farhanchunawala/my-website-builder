import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HoverFocusState {
    hoveredElement: string | number | null;
    focusedElement: string | number | null;
}

const initialState: HoverFocusState = {
    hoveredElement: null,
    focusedElement: null,
};

export const hoverFocusSlice = createSlice({
    name: "hoverFocus",
    initialState,
    reducers: {
        setHoveredElement(
            state,
            action: PayloadAction<string | number | null>
        ) {
            state.hoveredElement = action.payload;
        },
        setFocusedElement(
            state,
            action: PayloadAction<string | number | null>
        ) {
            state.focusedElement = action.payload;
        },
    },
});

export const { setHoveredElement, setFocusedElement } =
    hoverFocusSlice.actions;
