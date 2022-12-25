import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import cartSlice from "./cartSlice";
import userSlice  from "./userSlice"

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        auth:userSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
}) 