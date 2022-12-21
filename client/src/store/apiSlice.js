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

   getStore: builder.query({
    query: () => "/api/stores",
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
  useGetStoreQuery
} = apiSlice;
