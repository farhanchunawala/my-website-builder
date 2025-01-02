import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from "@reduxjs/toolkit";
import { usePathname } from "next/navigation";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const pathname = usePathname().slice(1);

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

// Async thunk to fetch data
export const fetchData = createAsyncThunk(
    "data/fetchData",
    async (): Promise<Record<string, any>> => {
        const response = await axios.get(
            // `${baseUrl}/api/contents/${pathname}`
            `${baseUrl}/api/contents/business-starter`
        );
        return response.data;
    }
);

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
			console.log(path, value);
			
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
