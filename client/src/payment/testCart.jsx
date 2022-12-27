import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopingCard from "../components/ShoppingCard.jsx";
import { useState } from "react";
import PayButton from "./PayButton.jsx";
import {addToOrder} from '../store/orderSlice'
// import {useCreateOrdersMutation} from '../store/apiSlice';
export default function TestCart() {
  const [address,setAddress] =useState("");
  const user = useSelector((state) => state.auth);
  const selector = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch()
 console.log(address);
  const x = ()=>{
    const newUser = {
     stores:sortCartOrder(),
     address:address,
     price:selector.cartItem.cartTotalAmount,
     clientId:user.user.id
   }
   dispatch(addToOrder(newUser))
   console.log(newUser);
   }

   const sortCartOrder = () => {
    const sortOrder = [];
    for (let i = 0; i < selector.cartItem.length; i++) {
      const obj = selector.cartItem[i];
      let storesId = sortOrder.map((n) => n.storeId);

      const iProduct = sortOrder.findIndex(
        (product) => product.storeId === obj.storeId
      );
      if (iProduct >= 0) {
        sortOrder[iProduct].products.push(obj._id);
      }

      if (!storesId.includes(obj.storeId)) {
        sortOrder.push({ storeId: obj.storeId, products: [obj._id] });
      }
    }
    return sortOrder;
  };

  
  return (
    <div className="flex justify-center">
      <ShopingCard orderAddress={address} />

      <div className="space-y-4 text-center ml-2">
     
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">פרטי משלוח</h2>
            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          {/* <p>שם פרטי</p>
          <input type="text" />
          <p>שם משפחה</p>
          <input type="text" />
          <p>משלוח אל:</p>
          <input onChange={(e)=>setAddress(e.target.value)} type="text" />
          <br />
          <button  className="bg-red-600">שמור</button>
          <br />
          <button className="bg-blue-500">מחק כתובת זו</button> */}
           <form className=" md:flex md:justify-between ">
        <div className="grid gap-6 mb-6  md:grid-cols-3 ">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name...." required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name...." required />
          </div>
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adderss</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}  className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address..." required />
          </div>  
          
          </div>
      
      
     
       
      </form>
            <div class="mt-6 cursor-pointer" onClick={()=>{x()}}>
              <PayButton>
                click hear to pay
              </PayButton>
            </div>
        </details>
        
      </div>
    </div>
  );
}
