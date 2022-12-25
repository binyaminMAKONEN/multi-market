import React, { useState } from 'react'
function PopUpProduct({setOpen,data}) {
  const [qty, setQty] = useState(0)

  const product = {
    img: "https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg",
    name: "תפוזים",
    description: "קצת על המוצר קצת על המוצר קצת על המוצר קצת על המוצר",
    price: "9.90",
    number:"1234567875",
    store:"החווה של דוד משה"
  };
  return (
    <>
      <div className=' fixed inset-0  z-50 shadow h-screen  backdrop-blur-sm bg-black/30 flex justify-center items-center '>
        <div className=' border-2 w-[350px] bg-white  border-red-300'>
          <button className='text-3xl' onClick={()=>setOpen(false)}>x</button>
          <hr />
        <img className=' justify-self-center-center' src={data?.img} alt="" />
        <p className='text-right text-cyan-600 text-xl '>ש"ח{data?.price}</p>
        <div className="text-center">
          <button className=" rounded-full border-2 border-cyan-600  w-7 h-7 text-cyan-600 hover:text-white hover:bg-cyan-600 " onClick={()=>setQty(qty + 1)}>+</button>
          <span className="mx-3">{qty}</span>
          <button className="rounded-full border-2 border-cyan-600 w-7 h-7 text-center" onClick={()=>setQty(qty - 1)}>-</button>
          <div className='gap-7 bg-white'>
          <p>מקט <span>שדג</span></p> 
          <hr /><br />
          <p>מקט <span>שדג</span></p> 
          <hr /><br />
          <p>מקט <span>שדג</span></p> 
          <hr /><br />
          <p>מקט <span>שדג</span></p> 
          <hr />

          </div>
      
         
          
        </div>
        </div>
     </div>
    </>
  )
}

export default PopUpProduct