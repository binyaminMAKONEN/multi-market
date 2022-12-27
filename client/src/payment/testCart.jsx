import React from "react";
import { useDispatch } from "react-redux";
import ShopingCard from "../components/ShoppingCard.jsx";
import { useState } from "react";
// import {useCreateOrdersMutation} from '../store/apiSlice';
export default function TestCart() {
  const [address,setAddress] =useState("")

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <ShopingCard orderAddress={address} />

      <div className="space-y-4">
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
          <p>שם פרטי</p>
          <input type="text" />
          <p>שם משפחה</p>
          <input type="text" />
          <p>משלוח אל:</p>
          <input onChange={(e)=>setAddress(e.target.value)} type="text" />
          <br />
          <button  className="bg-red-600">שמור</button>
          <br />
          <button className="bg-blue-500">מחק כתובת זו</button>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">בחירת זמן אספקה</h2>
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
          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </div>
  );
}
