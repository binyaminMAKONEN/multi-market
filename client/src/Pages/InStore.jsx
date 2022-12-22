import React from 'react'
import { useEffect } from 'react';
import {useGetProductsStoreByIdQuery,
  useGetStoreQuery} from "../store/apiSlice"
import StoreHeader from "../Features/StoreHeader"
import ShoppingCard from '../components/ShoppingCard';
import SortOptions from '../components/SortOptions';
import ProductCard from '../components/ProductCard';
import PopUpProduct from '../components/PopUpProduct';

const InStore = () => {
  const myStorage = window.localStorage;
  const id =JSON.parse(myStorage.getItem('storeId'));
  const {data:storData}=useGetStoreQuery()
  const store = storData?.filter(val=>val._id ===id)

const {data,isFetching,isSuccess,isError}=useGetProductsStoreByIdQuery(id)
console.log(data);
console.log(store);
let list;

if(isFetching){
  list = <div>Fetching</div>;
}else if(isSuccess){

  list =  data.map((product)=>( <ProductCard data={product.productId}/>))
  
}else if(isError){
  list = <div>Error</div>
}

    return (
    <div>
      <StoreHeader data={store[0]}  />
      <div className='flex justify-center gap-3 mx-6 mb-10 sm:mx-2 md:w-["80%"]'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
        <div className='h-full flex flex-wrap justify-evenly'>
{list}
            </div>
     </div>
     {/* <PopUpProduct/> */}
     </div>
   
    </div>
  )
}

export default InStore