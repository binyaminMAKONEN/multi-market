import React from 'react'
import {IoStorefrontSharp} from 'react-icons/io5'
import { useNavigate} from "react-router-dom";
const Stores = ({store}) => {

  const navigate =useNavigate()
  const myStorage = window.localStorage;

  const saveProduct = (products)=>{
    myStorage.setItem('storeId',JSON.stringify(products));
    navigate('/InStore')
  }

  return ( 
//     <>
//     <div  class="md:flex  hidden md:visible bg-white border-2 rounded-lg  w-full h-[195px] md:h-[105px] mt-2 hover:bg-gray-100 " onClick={()=>saveProduct(store._id)}>
//         <div className='text-right mr-2   grow w-7/12 md:mx-4' >
//           <h5 className='text-xl font-semibold'>{store.storeName}</h5>
//           <p>{store.description}</p>
//           <div className='flex justify-between ml-2 md:w-full   mt-2'>
//           <button type="button" class="inline-block h-12 md:h-8   w-96 md:w-auto  rounded   md:px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
//             <p className="invisible md:visible">{store.location.city},{store.location.address},{store.location.area}</p>
//           </div>
//         </div>
//      <img class="object-cover  rounded-t-lg w-52 md:w-auto   md:rounded-none md:rounded-l-lg" src={store?.image?.logo} alt=""/> 
// </div></>
<div className="bg-no-repeat bg-cover bg-center h-44 md:h-[8rem]  w-[100%] m-auto flex flex-col justify-end  block mb-3" style={{backgroundImage:`url(${store?.image?.logo})`}}>
<div className=" bg-[#ffffffd1] md:bg-white md:border  flex items-end justify-end text-right pb-2 h-2/4 md:h-[100%] px-2">
  <div className="mr-4 text-[12px] font-thin w-3/4">
    <h3 className="font-bold">{store.storeName}</h3>
    <p>{store.description}</p>
    <div className="flex flex-row-reverse justify-between items-end">
      <div className="flex justify-end mt-1 font-thin">
        <p>
        {store.location.city},{store.location.address},{store.location.area}
        </p>
        <p className="mt-2 ml-2">
          <IoStorefrontSharp className="text-[#0899A5]" />
        </p>
      </div>
      <div>
        <button className="bg-[#0899A5] p-1 px-2 text-white" onClick={()=>saveProduct(store._id)}>
          קנה בחנות זו
        </button>
      </div>
    </div>
  </div>

  <div className="bg-white">
    <img
      className=" h-[110px] w-[110px] border-2 border-white"
      src={store?.image?.logo}
      alt="logo"
    />
  </div>
</div>
</div>
  )
}

export default Stores