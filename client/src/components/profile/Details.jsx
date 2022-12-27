import React from 'react'
import { useSelector } from "react-redux";
const Details = () => {
    const selector = useSelector((state) => state.auth.user);
  return (
      <form class="w-full max-w-sm text-right">
        <h1 className='text-xl mb-5'>מידע אישי</h1>
  <div class="flex flex-col outline-none items-center  border-b border-teal-500 py-2">
    <label  className='text-right w-full '>שם פרטי
    <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" type="text"  value={selector.firstName} />
    </label>
    <label  className='text-right w-full '>
        שם משפחה
    <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" type="text"  value={selector.lastName} />
    </label>
    <label  className='text-right w-full '>אימייל
    <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" type="email"  value={selector.email} />
    </label>
    <label  className='text-right w-full '>תאריך לידה
    <input type="date"
    
    class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
       value="2022-02-20"
       min="2022-02-20" max="2032-02-20"/>
    </label>
 <div className='text-right w-full '>
    <h2>מגדר</h2>
      <label> 
    זכר
    <input class="appearance-none bg-transparent   text-right    mx-3  leading-tight focus:outline-none" type="radio"   placeholder="Jane Doe" value='בנימין' aria-label="Full name"/>
    </label>
      <label> 
   נקבה
    <input class="appearance-none bg-transparent   text-right    mx-3  leading-tight focus:outline-none" type="radio"   placeholder="Jane Doe" value='בנימין' aria-label="Full name"/>
    </label>
 </div>
  
   
  </div>
</form>
  )
}

export default Details