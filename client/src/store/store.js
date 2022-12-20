import {configureStore} from "@reduxjs/toolkit"
import marketSlice from "./reducer"
import { apiSlice } from "./apiSlice"
export const store = configureStore({
    reducer:{
        market:marketSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})