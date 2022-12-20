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

            <a href='#'>דרום</a>
            <a href='#'>מרכז</a>
            <a href='#'>צפון</a>
            </div>
         </div>
    </div>
    <div>
       
        <h4><span>אייקון</span> נמצאו 72 חנויות באזור זה </h4>
    </div>

    </div>
  )
}

export default SortOptions