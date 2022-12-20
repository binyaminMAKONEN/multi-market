import React from 'react'
// import InfoToolBar from '../components/InfoPageToolBar/InfoToolBar'
import {Link, Outlet} from 'react-router-dom'

const InfoPage = () => {
  return (
<>
<div>
      
<section className="bg-white dark:bg-gray-900 ">
        <div className=" px-6 py-12 mx-auto   border-2 border-red-300">
          <div className="mt-8   xl:mt-16 lg:flex lg:-mx-12">
            <div className=" lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
              <div className="mt-4 space-y-4 lg:mt-8">
              <Link to="Questions"> <button className="border">Questions Page</button> </Link><br/>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust &amp; Safety</a>
                <Link to="AboutInfo"> <button className="border">About Page</button> </Link>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</a>
                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Office Cleaning</a>
              </div>
            </div>
       
          </div>
        </div>
      </section>


</div>


    <Outlet/> 
</>

  
  )
}

export default InfoPage