import React from 'react'
import ShoppingCard from '../components/ShoppingCard'
import Stores from '../components/Stores';
import SortOptions from '../components/SortOptions';
import {
  useGetProductsQuery,
  useCreateUserMutation,
  useGetStoreQuery

} from '../store/apiSlice'
const StoreList = () => {
    const { data, isFetching,isLoading , isSuccess, isError } = useGetStoreQuery()
    const [createUser,response] =useCreateUserMutation()
    console.log(data,response);
    const newUser = {
            name: {
              firstName:"testUser",
              lastName: "testUserLastName",
            },
                  img:"testImg",
                  username:"testUserName",
                  email:"testMail",
                  password:"123456",
                  phone:"123456789",
    }

    return(
    <div>
        <div className='border border-4 text-center mb-4  py-20 shadow-2xl'>
        <h1 className=' text-6xl mt-16'>קטגרויות</h1>
        <button onClick={()=>createUser(newUser)}>create user</button>
    </div>
        <p className='text-2xl mb-12 text-center '>קטגרויות שונות</p>

     <div className='flex justify-center gap-3 mx-6 mb-10 sm:mx-2 md:w-["80%"]'>
     <ShoppingCard/>
     <div className='flex flex-col grow w-8/12'>
        <div className='h-[30%]'><SortOptions/></div>
        <div className='h-full'>
            <Stores/>
            <Stores/>
            <Stores/>
            </div>
     </div>
     </div>
 
    </div>

  )
}

export default StoreList