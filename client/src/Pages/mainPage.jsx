// import { TextInput} from 'flowbite-react'
import { useState } from 'react';
import { useEffect } from 'react'
import CategoryCard from '../components/CategoryCard'
import { useGetStoreQuery} from '../store/apiSlice'
 function MainPage() {
 const [stores,setStores]=useState([])
 const { data,isSuccess } = useGetStoreQuery();

 const filterdata=(arr)=>{
  const filterArr=[]
  const arrName=[] 
  arr.forEach(obj => {
    if (!arrName.includes(obj.storeType)){
      arrName.push(obj.storeType)
      filterArr.push(obj)
      } 

  });
 
return filterArr;
 }

 const filterCategory =(e)=>{
const filteList = data?.filter((val)=>val.storeType.includes(e.target.value))
setStores(filteList);
 }
useEffect(() => {
    if (isSuccess){
      setStores(filterdata(data))
    } 
      
  }, [JSON.stringify(data)])
  return (
    <div className=' bg-reapeat  bg-cover' style={{backgroundImage:'url(https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}>
        <div className='text-center mb-4'>
        <h1 className=' text-6xl'>ברוך הבא לעולם החנויות<br/> שלך</h1>
        <input className='mt-12 w-3/5 rounded-md h-12'  type="text" 
        onChange={(e)=>filterCategory(e)}/>
        <p className='text-2xl mt-20 mb-8'>קטגרויות שונות</p>
    </div>
    {/* categories section */}
        <div className='storesSection flex flex-wrap   justify-center gap-x-3 gap-y-3'>
          {stores.map((category)=>( <CategoryCard key={category._id} data={category}/>))}
        </div>
{/* brand section  */}
    <div className='brandSection gap-x-4  items-center flex flex-wrap mt-9  justify-center'>
        <img className='w-30 h-12 pb-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="" />
        <img className='w-30 h-20 p-2' src="https://i.postimg.cc/1XT7XPZY/2022-06-30-221634-removebg-preview-1.png" alt="" />
        <img className='w-30 h-20 pb-2' src="https://pngimg.com/uploads/google/google_PNG19627.png" alt="" />
        <img className='w-30 h-12 pb-2' src="https://assets.stickpng.com/images/58480fd7cef1014c0b5e4943.png" alt="" />
    </div>
<div className=' mt-16'>
<div className="text-center bg-no-reapeat  bg-cover bg-[url('https://images.pexels.com/photos/952483/pexels-photo-952483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                חגיגת מוצרים במולטי מרקט
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                תתחילו לבחור במגוון המוצרים החדשים והטריים שאנו מציעים <br />.בפריסה ארצית
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex bg-lime-600 items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition  duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                תתחילו לקנות
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}
export default MainPage