import axios from "axios";
import { useEffect, useState } from "react";
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';


function Login(props) {
    const [user, setUser] = useState({email:"",password:""})
    const [seePass, setSeePass] = useState(false)
    const [error, setError] = useState("")
    const [x,setX]=useState(false)

    const dataUser =async ()=>{
        try {
          const {data} =await axios.get('http://localhost:8080/auth/data',{withCredentials:true})
          console.log(data);
          
        } catch (err) {
            if(err.response.status===401)console.log("you need log in");
        }
    }
    
    const login = async()=>{
        try {
            const {data}=await axios.post('http://localhost:8080/api/users/login',user)
            sessionStorage.token=data.token 
        } catch (err) {
            console.log(err);
         if (err.response.status===400) setError("הסיסמא או האיימל שלך לא נכונים")
        }
      }
      
      const loginGoogle = ()=>{
      window.location.href = 'http://localhost:8080/auth/login/google'
      }
      useEffect(()=>{
        dataUser()
        setX(props.x)
      },[])
      console.log(x);
  return (
   x && <>
    <div className='flex justify-center items-center border-collapse fixed h-screen w-screen bg-clear '>
        <div className="h-3/5  flex justify-center  w-3/5">
        <div className="bg-cover  bg-radish-img h-2/12 md:w-5/12" ></div>
        <div className='bg-white  w-fit text-center'>
            <p className="text-end m-1 cursor-pointer font-semibold" onClick={()=>{setX(false)}}>X</p>
            <h1 ><b>כניסה</b></h1>
            <p>התחבר באמצעות דוא"ל שלך וסיסמא</p>
            <button className="text-blue-500 hover:bg-blue-500 hover:text-white border border-5 border-blue-500 font-bold py-2 px-4 rounded">facebook</button>
            <br />
            <div className="flex justify-center items-center">
            <GoogleButton onClick={()=>loginGoogle()}/>
            </div>
            <br />
           <p className="flex justify-around items-center"> 
           <span className=' bg-slate-400 h-0.5 inline-block w-2/5'></span>
             או 
             <span className=' bg-slate-400 h-0.5 inline-block w-2/5'></span>
            </p>
            <input name="email" onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder='הזן כתובת דוא"ל' className='m-3'/><br />
            <input name="password" onChange={(e)=>setUser({...user,password:e.target.value})} type={seePass?"text":"password"} placeholder='הזן סיסמא' />
            <br />
            <input type="checkbox" onChange={(e)=>{setSeePass(e.target.checked);}} />
            <label>הצג סיסמא </label><br />
            <br />
            <p className="text-red-600">{error}</p>
            <button className="border-teal-200 border-2 w-3/5 h-10" onClick={login}>התחבר</button>

        </div>
        </div>
    </div>
    </>
  )
}

export default Login