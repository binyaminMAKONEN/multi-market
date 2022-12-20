import axios from "axios";
import { useEffect, useState } from "react";
import GoogleButton from 'react-google-button'


function Login() {
    const [user, setUser] = useState({userName:"",password:""})

    const dataUser =async ()=>{
        try {
          const {data} =await axios.get('http://localhost:8080/auth/data',{withCredentials:true})
          console.log(data);
          
        } catch (err) {
          if(err.response.status===401)console.log("you need log in");
        }
      }

      const login = async()=>{
        
      }
      
      const loginGoogle = ()=>{
      window.location.href = 'http://localhost:8080/auth/login/google'
      }
      useEffect(()=>{
        dataUser()
      },[])
    
  return (
    <>
    <div className='flex justify-center items-center border-collapse fixed h-screen w-screen bg-clear '>
        <div className="h-full w-full flex justify-center md:h-">
        <div className="bg-cover bg-radish-img md:w-1/5" ></div>
        <div className='bg-white text-center'>
            <h1>כניסה</h1>
            <p>התחבר באמצעות דוא"ל שלך וסיסמא</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">facebook</button>
            <br />
            {/* <button className='bg-red-700 m-3'>google</button> */}
            <GoogleButton onClick={()=>loginGoogle()}/>
            <br />
            <span className='w-2/5'></span>
            <span> או </span>
            <span className='w-2/5'></span><br />
            <input type="text" placeholder='הזן כתובת דוא"ל' className='m-3'/><br />
            <input type="text" placeholder='הזן סיסמא' />
            <br />
            <button>התחבר</button>

        </div>
        </div>
    </div>
    </>
  )
}

export default Login