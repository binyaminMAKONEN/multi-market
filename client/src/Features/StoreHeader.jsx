import React from 'react'

function StoreHeader({data}) {
  return (
    <div className="h-96 mb-12">
<div className="z-30  relative bg-cover  w-full h-96 " style={{backgroundImage:`url(${data?.image?.logo})`}}/>
<div className="z-50 bg-white-600 border-2 border-white relative 	 left-60 bottom-40 h-36 w-36 sm:left-3/4  ">
  <img className="h-full" src={data?.image?.logo} alt="storeLogo" />
</div>
<div className="z-40    backdrop-blur-sm bg-white/80  h-28 relative bottom-64 " >
  <div className="invisible  sm:visible text-center  ">
  <h4 className="font-extralight relative  not-italic visible text-2xl  right-6 sm:visible   ">{data?.storeName}</h4>

  <span className="text-lg relative left-2">{data?.description}</span>
  <p className="text-lg mr-2 w-44 text-right relative bottom-14  left-14  not-italic visible  sm:visible sm:left-56"> {data?.location?.city}{data?.location?.address} <br/>08-2123431</p>
  </div>
  
</div>
<div>
       
      </div>
    </div>
  )
}

export default StoreHeader