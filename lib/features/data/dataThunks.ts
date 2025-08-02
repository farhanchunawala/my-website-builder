import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchData = createAsyncThunk<
    Record<string, unknown>, // Return type
    { route: string } // Argument type
>("data/fetchData", async ({ route }) => {
    const response = await axios.get(
        `${baseUrl}/api/contents/${route}`
    );
    return response.data;
});

export const saveData = createAsyncThunk<
    Record<string, any>, // Return type
    { route: string }, // Argument type
    { state: any } // ThunkAPI type
>("data/saveData", async ({ route }, { getState }) => {
    const state = getState();
    const { config, content, styles } = state.data.data;

    const response = await axios.post(
        `${baseUrl}/api/contents/upsert/${route}`,
        { route: route, config, content, styles }
    );
    return response.data;
});
