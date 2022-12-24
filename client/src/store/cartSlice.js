import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState = {
  cartItem: localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add 
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state.cartItem[itemIndex].name} cart quantity`,{
          position:"bottom-left"  
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`${action.payload.name}added to cart`,{
            position:"bottom-left"  
          })
      }
      localStorage.setItem('cartItems',JSON.stringify(state.cartItem))
    },
    // remove
    removeFromCart(state,action){
        const nextCartItem =  state.cartItem.filter(
           cartItem => cartItem._id !== action.payload._id
        )
        state.cartItem = nextCartItem;
        localStorage.setItem("cartItems",JSON.stringify(state.cartItem))
        toast.error(`${action.payload.name}removed from cart`,{
            position:"bottom-left"  
          })
    },
    // decrease
    decreaseCart(state,action){
      const itemIndex = state.cartItem.findIndex(
        cartItem => cartItem._id === action.payload._id
      )

      if(state.cartItem[itemIndex].cartQuantity > 1){
        state.cartItem[itemIndex].cartQuantity -= 1
        toast.info(`Decreased ${action.payload.name} cart quantity`,{
            position:"bottom-left"  
          })
      }else if (state.cartItem[itemIndex].cartQuantity === 1){
        const nextCartItem =  state.cartItem.filter(
            cartItem => cartItem._id !== action.payload._id
         )
         state.cartItem = nextCartItem;
         toast.error(`${action.payload.name}removed from cart`,{
             position:"bottom-left"  
            })
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItem))
    },
    clearCart(state,action){
        state.cartItem = [];
        toast.error(`Cart cleared`,{
            position:"bottom-left"  
           })
           localStorage.setItem("cartItems",JSON.stringify(state.cartItem))
    },
    getTotal(state,action){
        let {total,quantity} = state.cartItem.reduce((cartTotal,cartItem)=>{
            const {price,cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity
            return cartTotal;
        },{
            total:0,
            quantity:0
        })

        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
    }
  },
});

export const { addToCart,removeFromCart,decreaseCart,clearCart,getTotal } = cartSlice.actions;
export default cartSlice.reducer;
