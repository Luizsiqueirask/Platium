import { configureStore } from "@reduxjs/toolkit";
import beneficiaryReduce from "./api/beneficiarySlice";
import plansReduce from "./api/plansSlice";
import pricesReduce from "./api/pricesSlice";
import proposalReduce from "./api/proposalSlice";

const store = configureStore({
    reducer: {
        beneficiaries: beneficiaryReduce,
        proposal: proposalReduce,
        plans: plansReduce,
        prices: pricesReduce,

    },
});

export default store
