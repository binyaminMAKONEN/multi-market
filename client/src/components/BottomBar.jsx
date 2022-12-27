import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function BottomBar() {
  const {cartTotalQuantity} =useSelector(state => state.cart)
    const navigate = useNavigate()
    const [serach,setSearch] = useState()
    const pathname = window.location.pathname
    useEffect(() => {
        setSearch(pathname)

    }, [pathname])
    
  return (
    <div>
         {/* fixed nav */}
         <nav className="fixed  visible sm:invisible bottom-0 inset-x-0 bg-white flex justify-between text-sm text-lime-600 uppercase font-mono">
          <a href="#" className="w-full block py-5 px-3 text-center text-stone-400 hover:bg-lime-600 hover:text-gray-900 transition duration-300">
            <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>            </svg>
            צ'אט
          </a>
          <a href="/personalArea" className="w-full block py-5 px-3 text-stone-400 text-center hover:bg-lime-600 hover:text-gray-900">
            <svg className="w-6 h-6 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h12V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zm2 .5a.5.5 0 01.5.5V13h8V9.5a.5.5 0 011 0V13a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5a.5.5 0 01.5-.5z" />
             </svg>
            אזור אישי
          </a>
          <a href="/checkout" className="w-full block py-5 px-3 text-stone-400 text-center hover:bg-lime-600 hover:text-gray-900">
            <svg className="w-6 h-6 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            {cartTotalQuantity !=0?<span className="absolute  right-40 md:right-0 m-3  top-0  rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartTotalQuantity}
        </span>:null}
                עגלה
          </a>
          {pathname === '/StoreList' &&
          <a href="#" className="w-full block py-5 px-3 text-stone-400 text-center hover:bg-lime-600 hover:text-gray-900">
         <svg className="w-6 h-6 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg>

            חיפוש
          </a>
          }
          <a href="#" className="w-full block py-5 px-3 text-stone-400 text-center hover:bg-lime-600 hover:text-gray-900">
            <svg className="w-6 h-6 mb-2 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            תפריט
          </a>
          
        </nav>
        
    </div>
  )
}

export default BottomBar