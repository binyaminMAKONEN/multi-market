import React from 'react'
import ShoppingCard from '../components/ShoppingCard'
import Stores from '../components/Stores';
import SortOptions from '../components/SortOptions';
import {
  useGetProductsQuery,
} from '../store/apiSlice'
import { useEffect } from 'react';
const StoreList = () => {
    const { data,response, isFetching,isLoading , isSuccess, isError } = useGetProductsQuery()
    console.log(data);
    return(
    <div>
        <div className='border border-4 text-center mb-4  py-20 shadow-2xl'>
        <h1 className=' text-6xl mt-16'>קטגרויות</h1>
    </div>
        <p className='text-2xl mb-12 text-center '>קטגרויות שונות</p>

     <div className='flex justify-center gap-3 mx-6 mb-10 sm:mx-2 md:w-["80%"]'>
     <ShoppingCard/> 
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
        <div >
            <Stores/>
            <Stores/>
            <Stores/>
            </div>
     </div>
     </div>
 
    </div>

  )
}

export default StoreList