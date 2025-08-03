import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuilderState {
    path: string;
	mode: "view" | "builder";
}

const initialState: BuilderState = {
    path: "",
	mode: "view",
};

const builderSlice = createSlice({
    name: "builder",
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<string>) => {
            state.path = action.payload;
        },
        setMode: (state, action: PayloadAction<"view" | "builder">) => {
            state.mode = action.payload;
        },
    },
});

export const { setPath, setMode } = builderSlice.actions;
export default builderSlice;
