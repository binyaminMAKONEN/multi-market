import React from 'react'
import { useEffect } from 'react';
import {useGetProductsStoreByIdQuery,
  useGetStoreQuery} from "../store/apiSlice"
import StoreHeader from "../Features/StoreHeader"
import ShoppingCard from '../components/ShoppingCard';
import SortOptions from '../components/SortOptions';
import ProductCard from '../components/ProductCard';
import Spinner from '../Features/Spinner';
import PlusBtn from "../Features/PlusBtn";
import Toolbar from '../Features/Toolbar';
import { useState } from 'react';
const InStore = () => {
  const [productData, setproductData] = useState([])
  const [filterProductData, setfilterProductData] = useState([])
  const [load,setLoad]=useState(6)
  const myStorage = window.localStorage;
  const id =JSON.parse(myStorage.getItem('storeId'));
  const {data:storData}=useGetStoreQuery()
  const store = storData?.filter(val=>val._id ===id)
  
  const {data,isFetching,isSuccess,isError}=useGetProductsStoreByIdQuery(id)
  
  
  let list;
    
  //   if(isFetching){
  //     list = <Spinner/>
  //   }else if(isSuccess){
  //     list =  data.slice(0, load).map((product)=>( <ProductCard data={product.productId}/>))
  //     }else if(isError){
  //     list = <div>Error</div>
  //   }
    const filterCategory =(e)=>{
      const filteList = productData?.filter((val)=>{
        if (val.productId) {
          return val.productId.name.toLowerCase().includes(e.target.value.toLowerCase())  
        }
      })
      console.log(productData);
      setfilterProductData(filteList)
       }

  useEffect(()=>{
    if (isSuccess) {
     setproductData(data)
     setfilterProductData(data)
    }
    console.log(data);
  },[isSuccess])  
  return (
    <div>
      <Toolbar/>
    { store && <StoreHeader data={store[0]}  />}
      <div className='flex justify-center gap-3 mx-6 mb-10 sm:mx-2 md:w-["80%"]'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
          <input type="text" placeholder='search product' onChange={(e)=>filterCategory(e)} />
        <div className='h-full flex flex-wrap justify-evenly'>
{
  (productData.length>filterProductData.length?filterProductData:productData).map((value)=>(
    <ProductCard data={value.productId}/>
  ))
}
{list}
            </div>
            <div className="text-center  mt-3">
            {data && data.length > load && <PlusBtn setLoad={setLoad} load={load}/>}

            </div>
     </div>
     </div>
   
    </div>
  )
}

export default InStore