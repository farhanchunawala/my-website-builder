import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./dataThunks";
import { getNestedTarget } from "@/lib/utils/getNestedTarget";
import { Onest } from "next/font/google";

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
        updateNested(
            state,
            action: PayloadAction<{ path: string; value: any }>
        ) {
            const { path, value } = action.payload;
            const { target, lastKey } = getNestedTarget(
                state,
                `data.${path}`
            );
            if (lastKey) {
                target[lastKey] = value;
            }
        },
        insertNested(
            state,
            action: PayloadAction<{
                path: string;
                key: string | number;
                value: any;
            }>
        ) {
            const { path, key, value } = action.payload;
            const { target, lastKey } = getNestedTarget(
                state,
                `data.${path}.${key}`
            );
            if (!target) return;

            // Handle array insert at specific index
            if (Array.isArray(target)) {
                const index =
                    typeof key === "number"
                        ? key
                        : parseInt(key as string, 10);

                if (index >= 0 && index <= target.length) {
                    // Insert value at specified index
                    target.splice(index, 0, value);
                }
            }
            // Handle object insert by key
            else if (
                target &&
                typeof target === "object" &&
                !Array.isArray(target)
            ) {
                Reflect.set(target, lastKey, value);
            }
        },
        removeNested(state, action: PayloadAction<{ path: string }>) {
            const { path } = action.payload;
            const { target, lastKey } = getNestedTarget(
                state,
                `data.${path}`
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
                (state, action: PayloadAction<Record<string, any>>) => {
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

export const { setData, updateNested, insertNested, removeNested } =
    dataSlice.actions;
export default dataSlice;
