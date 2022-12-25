import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart,removeFromCart,decreaseCart, clearCart } from '../store/cartSlice'

 

export default function TestCart() { 
    

    const handleAddToCart = () =>{
        dispatch(addToCart())
    }
    const removeFromCarts = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }
    const minus = (cartItem)=>{
        dispatch(decreaseCart(cartItem))
    }
    const clear = ()=>{
        dispatch(clearCart())
    }
    const dispatch = useDispatch()
    const selector = useSelector(state => state.cart.cartItem)
   
  return (
    <div>
        <ul>

        {selector.map(item=>{
            
            return(<div>
                <li>{item.name}</li>
            <button onClick={()=>{removeFromCarts(item)}}>remove</button>
            <button  onClick={()=>{minus(item)}}>-</button>
            <button  onClick={()=>{clear()}}>clear cart</button>
            </div>
      )  })}  
        </ul>
       <button onClick={handleAddToCart}>add</button>
       
    </div>
  )

  
}



