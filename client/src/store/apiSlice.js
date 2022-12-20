import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
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
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
//   useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
