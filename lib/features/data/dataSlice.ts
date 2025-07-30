import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./dataThunks";

interface DataState {
    data: Record<string, any>;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: DataState = {
    data: {},
    status: "idle",
    error: null,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<Record<string, any>>) {
            state.data = action.payload;
        },
        setProperty(
            state,
            action: PayloadAction<{ path: string; value: any }>
        ) {
            const { path, value } = action.payload;

            const fullPath = `data.${path}`;
            const keys = fullPath.split(".");
            const lastKey = keys.pop();
            const target = keys.reduce(
                (node, key) => node[key],
                state as Record<string, any>
            );
            if (lastKey) {
                target[lastKey] = value;
            }
        },
        addProperty(
            state,
            action: PayloadAction<{
                path: string;
                key: string;
                value: any;
            }>
        ) {
            const { path, key, value } = action.payload;

            const fullPath = `data.${path}`;
            const keys = fullPath.split(".");
            const target = keys.reduce(
                (node, key) => node[key],
                state as Record<string, any>
            );

            if (target && key && typeof target === "object") {
                target[key] = value;
            }
        },
        deleteProperty(
            state,
            action: PayloadAction<{ path: string }>
        ) {
            const { path } = action.payload;

            const fullPath = `data.${path}`;
            const keys = fullPath.split(".");
            const lastKey = keys.pop();
            const target = keys.reduce(
                (node, key) => node[key],
                state as Record<string, any>
            );
            if (lastKey) {
                delete target[lastKey];
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchData.fulfilled,
                (
                    state,
                    action: PayloadAction<Record<string, any>>
                ) => {
                    state.status = "succeeded";
                    state.data = action.payload;
                    // const { route, config, content, styles } =
                    //     action.payload;
                    // state.route = route;
                    // state.config = config;
                    // state.content = content;
                    // state.styles = styles;
                }
            )
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Unknown error";
            });
    },
});

export const { setData, setProperty, addProperty, deleteProperty } =
    dataSlice.actions;
export default dataSlice;
