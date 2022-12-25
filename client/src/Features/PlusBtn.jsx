import React from 'react'

function PlusBtn({setLoad,load}) {
  return (
<div onClick={()=>setLoad(load+5)}>
        
        <a className="inline-block rounded-full border-black border p-3 text-black-600 hover:bg-lime-500 hover:text-white focus:outline-none focus:ring active:bg-lime-500">
          <svg className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>      </svg>
        </a>

        
      </div>
  )
}

export default PlusBtn