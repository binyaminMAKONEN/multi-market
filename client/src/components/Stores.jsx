import React from 'react'
import { useNavigate} from "react-router-dom";
const Stores = ({store}) => {

  const navigate =useNavigate()
  const myStorage = window.localStorage;

  const saveProduct = (products)=>{
    myStorage.setItem('storeId',JSON.stringify(products));
    navigate('/InStore')
  }

  return ( 
    <>
    <div  class="flex  bg-white border-2 rounded-lg  w-full h-[105px] mt-2 hover:bg-gray-100 " onClick={()=>saveProduct(store._id)}>
        <div className='text-right   grow w-7/12 md:mx-4' >
          <h5 className='text-xl font-semibold'>{store.storeName}</h5>
          <p>{store.description}</p>
          <div className='flex justify-between  mt-2'>
          <button type="button" class="inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            <p>{store.location.city},{store.location.address},{store.location.area}</p>
          </div>
        </div>
     <img class="object-cover  rounded-t-lg   md:rounded-none md:rounded-l-lg" src={store.image.logo} alt=""/> 
</div></>
  )
}

export default Stores