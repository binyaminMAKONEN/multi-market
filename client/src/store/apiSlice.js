import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = fetchBaseQuery({ 
  baseUrl:process.env.REACT_APP_SERVER_URL,
  credentials: "include" ,
  prepareHeaders: (headers,{getState})=>{
    const token =getState().auth.token
    // const user =getState().auth.user 
    if( token){
      headers.set('authorization',`Rocet ${token}`)
    }
    return headers
  }
});

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery:baseUrl ,
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
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (obj) => ({
        url: `/api/products`,
        method: "POST",
      }),
      invalidatesTags: ["products"],
    }),
    //createUser
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/api/users/register",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["user"],
    }),
    //logUser
    loginUser: builder.mutation({
      query: (logDetails) => ({
        url: "/api/users/login",
        method: "POST",
        body: logDetails,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({id,newPassword}) => ({
        url: `/api/users/updateUser/${id}`,
        method: "PUT",
        body: newPassword,
      }),
      invalidatesTags: ["user"],
    }),
    //storeCRAD
    getStore: builder.query({
      query: () => "/api/stores",
      providesTags: ["stores"],
    }),
    //createStore
    //add permission
    createStore: builder.mutation({
      query: (newStore) => ({
        url: "/api/stores",
        method: "POST",
        body: newStore,
      }),
      invalidatesTags: ["stores"],
    }),
    // 
    getStoreUser: builder.query({
      query: (id) =>`/api/stores/userId/${id}`, 
      providesTags: ["stores"],
    }),
    //add permission
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `/api/stores/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["stores"],
    }),
    //add permission
    getProductsStoreById: builder.query({
      query: (id) => `/api/stores/${id}`,
      providesTags: ["stores"],
    }),
    getProductsStoreByUserId: builder.query({
      query: (id) =>{
        console.log(id);
         return`/api/stores/user/${id}`
        },
      providesTags: ["stores"],
    }),
    //add permission
    //orderCRUD
    getOrders: builder.query({
      query: () => `/api/orders`,
      providesTags: ["order"],
    }),
//add permission
    createOrders: builder.mutation({
      query: (newOrder) => ({
        url: "/api/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["order"],
    }),
    
    getStoreOrCustomerOrderById: builder.query({
      query: (id) => `/api/orders/${id}`,
      providesTags: ["order"],
    }),
    
    getOrderByClientId: builder.query({
      query: (id) => `/api/orders/user/${id}`,
      providesTags: ["orders"],
    })
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  //   useUpdateProductMutation,
  useGetOrderByClientIdQuery,
  useGetStoreUserQuery,
  useGetProductsStoreByUserIdQuery,
  useDeleteProductMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useGetStoreQuery,
  useCreateStoreMutation,
  useDeleteStoreMutation,
  useGetProductsStoreByIdQuery,
  useGetOrdersQuery,
  useCreateOrdersMutation,
  useGetStoreOrCustomerOrderByIdQuery,
} = apiSlice;
