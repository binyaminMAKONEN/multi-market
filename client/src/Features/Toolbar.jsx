import React from 'react'

export default function Toolbar() {
  return (
    <div>
  <ul className="flex justify-center">
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">קצביות |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">פירות וירקות |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">מעדניות |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">מאפיות |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">מוצרי פארם |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">משקאות חריפים |</a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">הכל לחיות  | </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">אוכל מוכן |  </a>
  </li>
  <li class="mr-6">
    <a class="text-green-400 hover:text-black" href="#">משרדים  | </a>
  </li>
</ul>


<div>
        <button class="bg-lime-500 text-xs w-32 rounded-sm h-11 text-white hover:bg-lime-600">קנה בחנות זו</button>
        </div>
        <br />
        <div>
        <button class="bg-lime-500 w-1/6 h-11 rounded-sm text-white hover:bg-lime-600">לתשלום 408 ש"ח</button>
        </div>
        <br />
        
        

        <br />
        <div>
        
        <a className="inline-block rounded-full border-black border p-3 text-black-600 hover:bg-lime-500 hover:text-white focus:outline-none focus:ring active:bg-indigo-500" href="/download">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>      </svg>
        </a>

        
      </div>
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
