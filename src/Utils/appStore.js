import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice"
import todoSlice from "./todoSlice";
import { pokemonAPI } from "./pokeminAPISlice";
import { todoAPISlice } from "./todoAPISlicee";
import { cardsAPISlice } from "./cardsAPISlice";
import { cardsAPISliceAgain } from "./cardsAPISliceAgain";
import { customerVendorApiSlice } from "./CustomerVendorApiSlice";

const appStore = configureStore({
    reducer: {
        [pokemonAPI.reducerPath]: pokemonAPI.reducer,
        [todoAPISlice.reducerPath]: todoAPISlice.reducer,
        [cardsAPISlice.reducerPath]: cardsAPISlice.reducer,
        [cardsAPISliceAgain.reducerPath]: cardsAPISliceAgain.reducer,
        [customerVendorApiSlice.reducerPath]: customerVendorApiSlice.reducer,
        searchSlice,
        chatSlice,
        todoSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(pokemonAPI.middleware)
            .concat(todoAPISlice.middleware)
            .concat(cardsAPISlice.middleware)
            .concat(cardsAPISliceAgain.middleware)
            .concat(customerVendorApiSlice.middleware)

})

export default appStore