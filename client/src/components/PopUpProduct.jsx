import React, { useState } from 'react'
function PopUpProduct({setOpen,data}) {
  const [qty, setQty] = useState(0)
  return (
    <>
      <div className=' fixed inset-0  z-50 shadow h-screen  backdrop-blur-sm bg-black/30 flex justify-center items-center '>
        <div className=' border-2 w-[350px] p-5 bg-white '>
          <button className='text-3xl' onClick={()=>setOpen(false)}>x</button>
          <hr />
        <img className=' justify-self-center-center' src={data?.img} alt="" />
        <p className='text-right text-cyan-600 text-xl '>ש"ח{data?.price}</p>
        <div className="text-center">
          <div className='gap-7 bg-white text-right'>
          <p>מוצר :{data?.name}</p> 
          <hr /><br />
          <p>{data?._id} : מקט</p> 
          <hr /><br />
          <p>תיאור מוצר :{data?.description}</p> 
          <hr /><br />
          <p> {data?.storeName} : מותג  </p> 
      

          </div>
      
         
          
        </div>
        </div>
     </div>
    </>
  )
}

export default PopUpProduct