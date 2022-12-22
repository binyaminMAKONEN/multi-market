import React from 'react'
const Stores = ({store}) => {
  return ( 
    <>
    <div  class="flex  bg-white border-2 rounded-lg  w-full h-[105px] mt-2 hover:bg-gray-100 ">
        <div className='text-right   grow w-7/12 md:mx-4' >
          <h5 className='text-xl font-semibold'>{store.storeName}</h5>
          <p>{store.description}</p>
          <div className='flex justify-between  mt-2'>
          <button type="button" class="inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> כפתור מעבר לחנות</button> */}
            <p>{store.location.city},{store.location.address},{store.location.area}</p>
          </div>
        </div>
        {/* <div> */}

     <img class="object-cover  rounded-t-lg   md:rounded-none md:rounded-l-lg" src={store.image.logo} alt=""/> 
        {/* </div> */}
    {/* <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>  */}
</div></>
  )
}

export default Stores