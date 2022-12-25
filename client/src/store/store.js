import {configureStore} from "@reduxjs/toolkit"
import marketSlice from "./reducer"
import { apiSlice } from "./apiSlice"
import cartSlice from "./cartSlice"
export const store = configureStore({
    reducer:{
        cart:cartSlice,
        market:marketSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})