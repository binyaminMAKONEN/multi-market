import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stores:[{
        storId:"",
        productsDetails:[{productId:"", quantity:0}]
    }],
    // address: "",
    price:0,
    clientId:""
};


      const orderSlice = createSlice({
        name: "order",
        initialState,
        reducers: {
          // add 
          addToOrder(state, action) {
            state = action.payload;
            console.log(action.payload);
            localStorage.setItem('orderItem',JSON.stringify(action.payload))
          },
        
        },
      });
      
      export const { addToOrder } = orderSlice.actions;
      export default orderSlice.reducer;
