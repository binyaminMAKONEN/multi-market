import React from 'react'
import { TextInput} from 'flowbite-react'
import axios from 'axios'
import GoogleButton from 'react-google-button'

function mainPage() {
  const loginGoogle = async()=>{
  const data =await axios.get('http://localhost:8080/auth/data',{withCredentials:true})
  console.log(data);
  data?console.log(data):console.log("you need to login");

  }
  return (
    <div>
      {/* <button className='border-2' onClick={()=>login()}> show data</button><br /> */}
      <GoogleButton onClick={loginGoogle} />
      <a href='http://localhost:8080/auth/login/google' className='w-25'> Login</a><br />
      <a href='http://localhost:8080/auth/logout' className='w-25'> logout</a><br />
        <div className='border border-4 text-center mb-4'>
        <h1 className=' text-6xl mt-16'>בוא נתחיל לחפש מוצרים</h1>
        <input className='mt-12 w-3/5 rounded-md'  type="text" />
        <p className='text-2xl mt-20 mb-8'>קטגרויות שונות</p>
    </div>
        <div className='storesSection flex flex-wrap   justify-center gap-x-3 gap-y-3'>
 
        {/* <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/13068566/pexels-photo-13068566.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center ">
        <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
 
        <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center ">
        <img src="c" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div> */}
 
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">ביגוד ספורט</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/5486163/pexels-photo-5486163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">כולבו</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">משקאות חריפים</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">ביגוד סטייל</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/13068566/pexels-photo-13068566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">קצבייה</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">סופר</h5>
          
          </div>
        </div>
      </div>

        </div>

        <div className='brandSection gap-x-4 items-center flex flex-wrap mt-12  justify-center'>
            
<img className='w-40 h-20' src="https://newgensoft.com/wp-content/uploads/2021/03/Amazon-Web-Services.png" alt="" />
<img className='w-40 h-20' src="https://i.postimg.cc/1XT7XPZY/2022-06-30-221634-removebg-preview-1.png" alt="" />
<img className='w-40 h-20' src="data:image/png;base64,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" alt="" />
<img className='w-40 h-20'src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" alt="" />
        </div>
    </div>

  )
}

export default mainPage