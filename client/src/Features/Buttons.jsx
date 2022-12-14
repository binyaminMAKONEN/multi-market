import React from 'react'

export default function 
() {
  return (
    <div>
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
    </div>
  )
}
