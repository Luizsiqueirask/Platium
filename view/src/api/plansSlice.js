import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () =>{
    const response = await fetch("http://127.0.0.1:8000/api/plans");
    return await response.json();
});

const plansSlice = createSlice({
    name: 'plans',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: false,
    extraReducers: {
        [fetchPlans.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchPlans.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = [...state.entities, ...action.payload];
        },
        [fetchPlans.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default plansSlice.reducer;