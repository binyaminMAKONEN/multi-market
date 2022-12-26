import React from 'react'
import { useState } from 'react'
import { useEffect,useRef } from 'react'
import { useSelector } from "react-redux";
import {useLoginUserMutation,useUpdateUserMutation} from "../../store/apiSlice"
const Password = () => {
  const [isLog,setIsLog]=useState(false)
  const selector = useSelector((state) => state.auth.user);
  const [loginUser]=useLoginUserMutation()
  const [updateUser,{isSuccess}]= useUpdateUserMutation()
  const emailRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();


  const userVerification = async()=>{
    console.log(emailRef.current.value);
    console.log(passwordRef);
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    
const userData=await loginUser(user)
if (userData.data.user.email===user.email) {
  setIsLog(!isLog)
}

  }
  const ChangePassword = async()=>{
    
    const id =selector.id
    const newPass ={password:newPasswordRef.current.value}
    const data =await updateUser({ id:id, newPassword: newPass })
    console.log(data);
    console.log(isSuccess);
  }


  return (
    <div class="w-full max-w-sm text-right" >
      <h1 className='text-xl mb-5'>החלפת סיסמא</h1>
      {!isLog ? 
<div class="flex flex-col outline-none items-center  border-b border-teal-500 py-2">
 
  <label  className='text-right w-full '>אימייל
  <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" ref={emailRef} type="email"  placeholder="Exsampal@gmail.com" />
  </label>
  <label  className='text-right w-full '>סיסמא
  <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" ref={passwordRef} type="password"  placeholder="******" />
  </label>

 
  <button className="bg-[#0899A5] p-1 px-2 text-white" onClick={userVerification}>המשך</button>
</div>
:
<div class="flex flex-col outline-none items-center  border-b border-teal-500 py-2">
 <label  className='text-right w-full mb-8'>הכנס סיסמא חדשה אם מינימום 6 ספרות
 <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" ref={newPasswordRef} type="password"  placeholder="******" />
 </label>
 <button className="bg-[#0899A5] p-1 px-2 text-white" onClick={ChangePassword} >החלף סיסמא</button>
</div>
}
</div>
  )
}

export default Password