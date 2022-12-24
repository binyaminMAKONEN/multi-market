import React from 'react'
// import InfoToolBar from '../components/InfoPageToolBar/InfoToolBar'
import {Link, Outlet} from 'react-router-dom'

const InfoPage = () => {
  return (
<>
{/* <div className="flex justify-center"> */}
<div className="border border-red-600  ">
      
        
          <div className=" xl:mt-16 lg:flex lg:-mx-12">
              <div className="  sm:w-fit sm:h-32 sm:flex-row  lg:mt-8">
              <div className="flex flex-col justify-between  bg-white border-r">

        <div className="px-4 py-6 backdrop-blur-sm bg-white/50">

          <nav aria-label="Main Nav" className="flex overflow-x-scroll shadow-black md:flex-col md:overflow-hidden  ">
          <img className="h-12 w-full  md:h-36 md:p-9 md: " src="https://i.postimg.cc/3N22WDJz/Multi-Market-Logo-preview-rev-1.png" alt="" />
            <a href="#" className="flex  px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg  className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <Link to="Questions"> <button className="border">Questions </button> </Link><br/>
            </a>
            <a href="#" className=" flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <Link to="AboutInfo"> <button className="border">About </button> </Link>
            </a>
            <a href="#" className=" flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <Link to="AboutInfo"> <button className="border">About </button> </Link>
            </a>
            <a href="#" className=" flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <Link to="AboutInfo"> <button className="border">About </button> </Link>
            </a>
            <a href="#" className=" flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <Link to="AboutInfo"> <button className="border">About </button> </Link>
            </a>
            <a href="#" className=" flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <svg className="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <Link to="AboutInfo"> <button className="border">About </button> </Link>
            </a>
          </nav>
        </div>
      </div>
    </div>
         
            <div className="border-3  h-screen  p-5  md:h-screen border-red-300 ">   
            <Outlet/>
          
            </div>
          {/* </div> */}
        
      



</div>
</div>



</>

  
  )
}

export default InfoPage