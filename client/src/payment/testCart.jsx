import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addToCart,removeFromCart } from '../store/cartSlice'
 

export default function TestCart() { 

    const handleAddToCart = () =>{
        dispatch(addToCart( {
            _id: "639a14865ae00e9c850df447",
            name: " קונסולת סוני 4 כולל 2 בקרים ",
            img: "https://www.dominator.co.il/images/itempics/833_25082020164009_large.jpg",
            quantity: 1,
            price: 200,
            storeName: "Ptc Gamer",
            productType: [
                "קונסולה,PS4"
            ],
            description: " סוני 4 הכולל 2 בקרים",
            storeId: "639a13ba81192968d0c97fea"
        }))
    }
    const removeFromCarts = (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    }
    const dispatch = useDispatch()
    const selector = useSelector(state => state.cart.cartItem)
    console.group(selector);
  return (
    <div>
        <ul>

        {selector.map(item=>{
            console.log(item);
            return(<div>
                <li>{item.name}</li>
            <button onClick={()=>{removeFromCarts(item._id)}}>remove</button>
            </div>
      )  })}  
        </ul>
       <button onClick={handleAddToCart}>add</button>
       
    </div>
  )
}
