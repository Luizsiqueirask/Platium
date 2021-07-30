import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchBeneficiary = createAsyncThunk("beneficiary/fetchBeneficiary", async () => {
    const response = await fetch("https://127.0.0.1:8000/api/beneficiary");
    return await response.json();
});

const beneficiarySlice = createSlice({
    name: "beneficiaries",
    initialState: {
        entities: [],
        loading: 'idle'
    }, reducers: {
        AddBeneficiary(state, action) {
            state.entities.push(action.payload);
        },
        UpdateBeneficiary(state, action){
            const { id, quantidade, idade, nomes } = action.payload;
            const checkBeneficiary = state.entities.find((beneficiary) => beneficiary.id === id);
            if (checkBeneficiary){
                checkBeneficiary.quantidade = quantidade;
                checkBeneficiary.idade = idade;
                checkBeneficiary.nomes = nomes;

            }
        },
        DeleteBeneficiary(state, action){
            const { id } = action.payload;
            const checkBeneficiary = state.entities.find((beneficiary) => beneficiary.id === id);
            if (checkBeneficiary){
                state.entities = state.entities.filter((beneficiary) => beneficiary.id !== id);
            }
        },
    },
    extraReducers: {
        [fetchBeneficiary.pending]: (state, action) => {
            state.loading =true
        },
        [fetchBeneficiary.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = [...state.entities, ...action.payload];
        },
        [fetchBeneficiary.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export const { AddBeneficiary, UpdateBeneficiary, DeleteBeneficiary } = beneficiarySlice.actions;
export default beneficiarySlice.reducer