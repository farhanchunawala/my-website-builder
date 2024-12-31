import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { usePathname } from "next/navigation";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const pathname = usePathname().slice(1);

// Async thunk to fetch data
export const fetchData = createAsyncThunk(
    "data/fetchData",
    async () => {
        const response = await axios.get(
			// `${baseUrl}/api/contents/${pathname}`
			`${baseUrl}/api/contents/business-starter`
        );
        return response.data;
    }
);

const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: "",
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setData } = dataSlice.actions;
export default dataSlice;
