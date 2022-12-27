import React from 'react';
import ShoppingCard from '../components/ShoppingCard';
import Stores from '../components/Stores';
import SortOptions from '../components/SortOptions';
import { useGetStoreQuery } from '../store/apiSlice';
 import Toolbar from '../Features/Toolbar';
import Header from '../Features/Header';
const StoreList = () => {
    const { data ,isFetching,isSuccess,isError } = useGetStoreQuery()
  
    const myStorage = window.localStorage;
    const storeData = data?.filter(val=>val.storeType === myStorage.getItem('category'))
    console.log(data);
    

    let list;
   let listMobile;
    if(isFetching){
      list = <div>Fetching</div>;
  }else if(isSuccess){

      list =  storeData.map((store)=>( <Stores store={store}/>))
  }else if(isError){
      list = <div>Error</div>
  }


    
    return(
    <div>
      <Toolbar/>
      <Header categoryDetails={isFetching?[]:storeData} />
        <div className='border-4 text-center mb-4  py-20 shadow-2xl'>
        <h1 className=' text-3xl '>רשימת חנויות בקטגורייה</h1>
    </div>

     <div className='flex justify-center  gap-3 mx-12 mb-10 sm:mx-2 md:mx-28'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className=' mb-4 '>
          <SortOptions/>
        </div>
        <div className=''>
        {list}
            </div>
     </div>
     </div>
 
    </div>

  )
}

export default StoreList