import React from 'react'
import { useEffect } from 'react';
import {useGetProductsStoreByIdQuery} from "../store/apiSlice"
import StoreHeader from "../Features/StoreHeader"
import ShoppingCard from '../components/ShoppingCard';
import SortOptions from '../components/SortOptions';
const InStore = () => {
  const myStorage = window.localStorage;
  const id =JSON.parse(myStorage.getItem('storeId'));
const {data}=useGetProductsStoreByIdQuery(id)
console.log(data);

    return (
    <div>
      <StoreHeader  />
      <div className='flex justify-center gap-3 mx-6 mb-10 sm:mx-2 md:w-["80%"]'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
        <div className='h-full'>

            </div>
     </div>
     </div>
    </div>
  )
}

export default InStore