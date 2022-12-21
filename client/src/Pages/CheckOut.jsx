import React from 'react'
import ShoppingCard from '../components/ShoppingCard'

const CheckOut = () => {
  return (
    <div className="columns-2">
             <div className="w-full"><ShoppingCard/></div>

        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-right text-gray-900">
              פרטי משלוח
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-teal-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

          </summary>
          <form className="text-right p-3">
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">רחוב</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div> 
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">שדה רחוב 2</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div> 
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">שם החברה למשלוח</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div> 
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">מיקוד</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div> 
      
       
        <button type="submit" className="text-white bg-teal-500  text-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">שמור</button>
      </form>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              בחירת זמן אספקה
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-teal-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

          </summary>
          <p className="px-4 mt-4 leading-relaxed text-gray-700 text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h2 className="font-medium text-gray-900">
              פרטי תשלום
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-teal-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>


          </summary>
          <form className="text-right p-3">
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">מספר כרטיס</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div> 
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">תוקף</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div> 
        <div className="mb-6 text-right">
          <label htmlFor="email" className="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white">שלוש ספורת</label>
          <input type="text" id="email" className="bg-gray-50 text-right border-2 border-transparent border-b-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
        </div> 
      
      
       
        <button type="submit" className="text-white bg-teal-500  text-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">שמור</button>
      </form>
        </details>
      
  
    </div>
  )
}

export default CheckOut