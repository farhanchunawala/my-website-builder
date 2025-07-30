import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuilderState {
    path: object;
}

const initialState: BuilderState = {
    path: {},
};

const builderSlice = createSlice({
    name: "builder",
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<string>) => {
            state.path = action.payload;
        },
    },
});

export const { setPath } = builderSlice.actions;
export default builderSlice;
