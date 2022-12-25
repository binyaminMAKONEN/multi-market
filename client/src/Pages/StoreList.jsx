import React from 'react'
import ShoppingCard from '../components/ShoppingCard'
import Stores from '../components/Stores';
import SortOptions from '../components/SortOptions';
import {
  useGetStoreQuery
} from '../store/apiSlice'

const StoreList = () => {
    const { data ,isFetching,isSuccess,isError } = useGetStoreQuery()
    const myStorage = window.localStorage;
    const storeData = data?.filter(val=>val.storeType === myStorage.getItem('category'))

    let list;

    if(isFetching){
      list = <div>Fetching</div>;
  }else if(isSuccess){

      list =  storeData.map((store)=>( <Stores store={store}/>))
  }else if(isError){
      list = <div>Error</div>
  }


    
    return(
    <div>
        <div className='border border-4 text-center mb-4  py-20 shadow-2xl'>
        <h1 className=' text-6xl mt-16'>קטגרויות</h1>
    </div>

     <div className='flex justify-center  gap-3 mx-12 mb-10 sm:mx-2 md:mx-28'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
        <div className=''>
        {list}

            </div>
     </div>
     </div>
 
    </div>

  )
}

export default StoreList