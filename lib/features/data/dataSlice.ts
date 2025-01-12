import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface DataState {
    data: Record<string, any>; // Adjust to match the actual structure of your data
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: DataState = {
    data: {},
    status: "idle",
    error: null,
};

interface RootState {
    data: DataState;
}

export const fetchData = createAsyncThunk<
    Record<string, unknown>, // Return type
    { pathname: string } // Argument type
>("data/fetchData", async ({ pathname }) => {
    const response = await axios.get(
        `${baseUrl}/api/contents/${pathname}`
    );
    return response.data;
});

export const saveData = createAsyncThunk<
    Record<string, any>, // Return type
    { pathname: string }, // Argument type
    { state: RootState } // ThunkAPI type
>("data/saveData", async ({ pathname }, { getState }) => {
    const state = getState();
    const { config, content, styles } = state.data.data;

    const response = await axios.post(
        `${baseUrl}/api/contents/upsert/${pathname}`,
        { route: pathname, config, content, styles }
    );
    return response.data;
});

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

export const { setData, setProperty } = dataSlice.actions;
export default dataSlice;
