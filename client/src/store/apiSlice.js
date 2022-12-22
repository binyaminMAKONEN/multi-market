import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    //productCRUD
    getProducts: builder.query({
      query: () => "/api/products",
      providesTags: ["products"],
    }),
    createProducts: builder.mutation({
      query: (newProducts) => ({
        url: "/api/products",
        method: "POST",
        body: newProducts,
      }),
      invalidatesTags: ["products"],
    }),

    // updateProduct: builder.mutation({
    //   query: (id, product ) => ({
    //     url: `/api/products/${id}`,
    //     method: "PUT",
    //     body: product,
    //   }),
    //   invalidatesTags: ["products"],
    // }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    //createUser
    createUser:builder.mutation({query:(newUser)=>({
        url: "/api/users/register",
        method: "POST",
        body: newUser,
    }),
    invalidatesTags: ["user"],
}),
   //logUser
   loginUser:builder.mutation({query:(logDetails)=>({
    url: "/api/users/login",
    method: "POST",
    body: logDetails,
   }),
   invalidatesTags: ["user"],
}),
//storeCRAD
   getStore: builder.query({
    query: () => "/api/stores",
    providesTags: ["stores"],
  }),
     //createStore
     createStore:builder.mutation({query:(newStore)=>({
        url: "/api/stores",
        method: "POST",
        body: newStore,
       }),
       invalidatesTags: ["stores"],
    }),
    deleteStore: builder.mutation({
        query: (id) => ({
          url: `/api/stores/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["stores"],
      }),
      getProductsStoreById: builder.query({
        query: (id) => `/api/stores/${id}`,
        providesTags: ["stores"],
      }),
    //orderCRUD
    getOrders: builder.query({
        query: (id) => `/api/orders`,
        providesTags: ["order"],
      }),

      createOrders:builder.mutation({query:(newOrder)=>({
        url: "/api/orders",
        method: "POST",
        body: newOrder,
       }),
       invalidatesTags: ["order"],
    }),
    getStoreOrCustomerOrderById: builder.query({
        query: (id) => `/api/orders/${id}`,
        providesTags: ["stores"],
      }),

  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
//   useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetStoreQuery,
  useCreateStoreMutation,
  useDeleteStoreMutation,
  useGetProductsStoreByIdQuery,
  useGetOrdersQuery,
  useCreateOrdersMutation,
  useGetStoreOrCustomerOrderByIdQuery

} = apiSlice;
