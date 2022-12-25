import React from 'react'
// import InfoToolBar from '../components/InfoPageToolBar/InfoToolBar'
import {Link, Outlet} from 'react-router-dom'

const InfoPage = () => {
  return (
<>
{/* <div className="flex justify-center"> */}
<div className="">
      
        
          <div className="  lg:flex lg:mx-8">
              <div className="  sm:w-fit sm:h-32 sm:flex-row lg:mt-8">
              <div className="flex flex-col justify-between  bg-white border-r">
        <div className="px-4 py-6 backdrop-blur-sm bg-white/50">
          <nav aria-label="Main Nav" className="flex overflow-x-scroll shadow-black md:flex-col md:overflow-hidden  ">
          {/* <img className="h-12 w-full  md:h-fit md:p-5 " src="https://i.postimg.cc/3N22WDJz/Multi-Market-Logo-preview-rev-1.png" alt="" /> */}
            <a href="#" className="flex justify-center  items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <Link to="AboutInfo"> <button className="">אודות </button> </Link>
            </a>
            <a href="#" className=" flex justify-center items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <Link to="Questions"> <button >שאלות נפוצות </button> </Link><br/>
            </a>
            <a href="#" className=" flex justify-center items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <Link to="AboutInfo"> <button >אודות </button> </Link>
            </a>
            <a href="#" className=" flex justify-center items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <Link to="AboutInfo"> <button >אודות </button> </Link>
            </a>
            <a href="#" className=" flex justify-center items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <Link to="AboutInfo"> <button >אודות </button> </Link>
            </a>
            <a href="#" className=" flex justify-center items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <Link to="AboutInfo"> <button >אודות </button> </Link>
            </a>
          </nav>
        </div>
      </div>
    </div>
         
            <div className="border-3  h-fit  p-5  md:h-fit lg:h-fit  border-red-300 ">   
            <Outlet/>
          
            </div>
          {/* </div> */}
        
      



</div>
</div>



</>

  
  )
}

export default InfoPage