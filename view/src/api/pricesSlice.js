import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPrices = createAsyncThunk("prices/fetchPrices", async () =>{
    const response = await fetch("http://127.0.0.1:8000/api/prices");
    return await response.json();
});

const pricesSlice = createSlice({
    name: 'prices',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: false,
    extraReducers: {
        [fetchPrices.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchPrices.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = [...state.entities, ...action.payload];
        },
        [fetchPrices.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default pricesSlice.reducer;