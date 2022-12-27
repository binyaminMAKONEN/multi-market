import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import {useGetOrderByClientIdQuery} from '../../store/apiSlice'
const Orders = () => {
  const user = useSelector((state) => state.auth.user);
    const [myOrders, setMyOrders] = useState([]);
    const {data,isSuccess,isFetching} = useGetOrderByClientIdQuery(user.id)
    
    useEffect(() => {
        if (isSuccess) {
          setMyOrders(data)
         
        } 
        
        console.log({data});
    }, [isFetching]);
   
  return (
    <div className="">
         <thead className="text-xs text-center text-gray-700  uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-200">
          <tr >
            <th scope="col" className="py-3 px-6">
              תאריך הזמנה
            </th>
            <th scope="col" className="py-3 px-6">
              כמות מוצרים
            </th>
            {/* <th scope="col" className="py-3 px-6">
              Category
            </th> */}
            <th scope="col" className="py-3 px-6">
              רחוב
            </th>
          
          </tr>
        </thead>
      {myOrders.map((order,index)=>{
      return(
        
      <div key={index} className="overflow-x-auto relative shadow-md  sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-slate-200">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {order.date.slice(0, 10)}
            </th>
            <td className="py-4 px-6">
              {order.stores.length}
            </td>
            {/* <td className="py-4 px-6">
              Laptop
            </td> */}
            <td className="py-4 px-6 text-black">
            {order.address}
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
      )
    })}</div>
  )
}

export default Orders