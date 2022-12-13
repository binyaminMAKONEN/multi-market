import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ShoppingCard from '../components/ShoppingCard'
import Stores from '../components/Stores';
const StoreList = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
        <div className='border border-4 text-center mb-4  py-20 shadow-2xl'>
        <h1 className=' text-6xl mt-16'>קטגרויות</h1>
        {/* <input className='mt-12 w-3/5 rounded-md'  type="text" /> */}
    </div>
        <p className='text-2xl mb-12 text-center '>קטגרויות שונות</p>

     <div className='flex justify-center gap-3 border-8 mx-6 mb-10 sm:mx-2 '>
     { windowSize.innerWidth > 710 && <ShoppingCard/> }
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%] border-4'>option</div>
        <div className='h-full  border-4'>
            <Stores/>
            <Stores/>
            <Stores/>
            </div>
     </div>
     </div>
 
    </div>

  )
}
function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
export default StoreList