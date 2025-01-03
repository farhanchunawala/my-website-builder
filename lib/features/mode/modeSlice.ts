import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "mode",
    initialState: null,
    reducers: {
        setMode: (state, action) => action.payload
    },
});

export const { setMode } = modeSlice.actions;
export default modeSlice;
