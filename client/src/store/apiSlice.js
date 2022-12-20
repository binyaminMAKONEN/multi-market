
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl ='http://localhost:8080'
export const  apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({

        getProducts:builder.query({query:()=>'/api/products',providesTags:['products']}),
    //     getLabels:builder.query({query:()=>'/api/labels',providesTags:['transaction']}),
    //     addTransaction:builder.mutation({query:(initialTransaction)=>({
    //         url:'/api/transaction',
    //         method:'POST',
    //         body:initialTransaction
    //     }),
    //     invalidatesTags:['transaction']
    // }),

    })

})

export const {
    useGetProductsQuery
}= apiSlice 