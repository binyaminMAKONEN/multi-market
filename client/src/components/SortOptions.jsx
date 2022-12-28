import React from 'react'

const SortOptions = () => {
  return (
    <div className='text-right'>

    <div className='flex justify-between  grow h-[19vh]'>
        <div>
        <h6> סוגי מוצרים</h6>
            <div className='flex flex-col text-blue-600 text-sm'>

            <a href='#'>חלבי</a>
            <a href='#'>בשרי</a>
            <a href='#'>ירקות</a>
            </div>        </div>
        <div>
        <h6> סוגי חנויות </h6>
            <div className='flex flex-col text-blue-600 text-sm'>

            <a href='#'>כולבו</a>
            <a href='#'>מסעדת בשרים</a>
            <a href='#'>סופר שכונתי</a>
            </div>
        </div>
        <div>
        <h6> ישובים</h6>
            <div className='flex flex-col text-blue-600 text-sm'>

            <a href='#'>אשדוד</a>
            <a href='#'>תל אביב</a>
            <a href='#'>באר שבע</a>
            </div>
        </div>
        <div>
            <h6> אזורים</h6>
            <div className='flex flex-col text-blue-600 text-sm'>

            <button href='#'>דרום</button>
            <button href='#'>מרכז</button>
            <button href='#'>צפון</button>
            </div>
         </div>
    </div>
    <div>
  
        <h4 className="text-right">נמצאו 72 חנויות באזור זה<span>  <svg  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lime-600 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg></span> </h4>
    </div>
    <div>
    </div>

    </div>
  )
}

export default SortOptions