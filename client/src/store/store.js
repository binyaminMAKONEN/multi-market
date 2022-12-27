import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./apiSlice"
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import userSlice  from "./userSlice";


export const store = configureStore({
    reducer:{
        cart:cartSlice,
        order:orderSlice,
        auth:userSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
}) 