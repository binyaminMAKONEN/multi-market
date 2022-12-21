import React from 'react'
import { useCreateUserMutation } from './apiSlice'
const Exsample = () => {
    const [createUser,response] =useCreateUserMutation()
    console.log(response);
    const newUser = {
            name: {
              firstName:"testUser",
              lastName: "testUserLastName",
            },
                  img:"testImg",
                  username:"testUserName",
                  email:"testeMail",
                  password:"123456",
                  phone:"123456789",
    }
    
      return (
        <div>
            <button onClick={()=>createUser(newUser)}>create user</button>
        </div>
      )
}

export default Exsample