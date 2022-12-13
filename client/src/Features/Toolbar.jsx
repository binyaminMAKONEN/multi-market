import React from 'react'

export default function Toolbar() {
  return (
    <div>
   <nav className="bg-white border-red border-4 p-1 shadow dark:bg-gray-800">
        <div className="container flex items-center justify-evenly   mx-auto text-gray-600 capitalize dark:text-gray-300">
          <button className='border-transparent  border-x-2 border-black p-2 hover:text-lime-600  hover:  sm:mx-6"'>קצביות</button>
          <button className='border-transparent  border-x-2 border-black p-2 hover:text-lime-600  hover:  sm:mx-6"'>סופרים</button>
          <button className='border-transparent  border-x-2 border-black p-2 hover:text-lime-600  hover:  sm:mx-6"'>כולבו</button>
          <button className='border-transparent  border-x-2 border-black p-2 hover:text-lime-600  hover:  sm:mx-6"'>ביגוד</button>
          <button className='border-transparent  border-x-2 border-black p-2 hover:text-lime-600  hover:  sm:mx-6"'>משקאות</button>
        </div>
      </nav>
    </div>
  )
}
