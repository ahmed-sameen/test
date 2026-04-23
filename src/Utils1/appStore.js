import { configureStore } from "@reduxjs/toolkit";
import { RTKCardsApi } from "./RTKCardsApi";

const appStore1 = configureStore({
    reducer: {
        [RTKCardsApi.reducerPath]: RTKCardsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(RTKCardsApi.middleware)
})

export default appStore1;