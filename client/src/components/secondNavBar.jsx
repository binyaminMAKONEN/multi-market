import React from 'react'
import { Navbar,Dropdown,Avatar ,Label,TextInput} from 'flowbite-react'
import { ImLocation } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {logOut,setCredentials,setGoogleUser} from "../store/userSlice";
import axios from 'axios';
import { Link } from 'react-router-dom';


function SecondNavBar() {
  const {cartTotalQuantity} =useSelector(state => state.cart)
  const appStore = useSelector(state=>state)
  console.log(appStore);
  const userConnectData = appStore.auth.user
  console.log(userConnectData);
  const dispatch = useDispatch()

  const logout =async ()=>{
    window.location.href = "http://localhost:8080/auth/logout";
    
    dispatch(logOut())
  }
  return (
    <div>
         <Navbar
  fluid={true}
  rounded={true}
>

  <Navbar.Brand href="#">
    <img
      src="https://i.postimg.cc/3N22WDJz/Multi-Market-Logo-preview-rev-1.png"
      className="mr-3 h-6 sm:h-9 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      
    </span>
  </Navbar.Brand>
  
    <Navbar.Toggle />
  <Navbar.Collapse>
     
    <div>
       <div className="flex md:order-2">
  <div className="md:flex hidden font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">

<div  className="relative flex">
      <svg className="flex-1 w-7 h-7 fill-current" viewBox="0 0 24 24">
        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
      </svg>
      <   Link to="/checkout"/> 
       <span className="absolute  right-40 md:right-0  top-0  rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartTotalQuantity}
      </span>
    </div>
    </div>
  <p className='self-center'>תל אביב</p>
  
    <button> <ImLocation className='text-2xl ml-1 mr-3 text-lime-500'/></button>
    <p className='self-center md:mr-1 xl:mr-2'>שלום {userConnectData.firstName}</p>

    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={userConnectData.img} rounded={true}/>}
    >
        
      <Dropdown.Header>
        <span className="block text-sm">
        שלום {userConnectData.firstName}
        </span>
        <span className="block truncate text-sm font-medium">
          {userConnectData.email}
        </span>
      </Dropdown.Header>
      <Link to={"PersonalArea"}>
      <Dropdown.Item>
        אזור אישי
      </Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Dropdown.Item onClick={()=>logout()}>
        התנקנות
      </Dropdown.Item>
    </Dropdown>
  </div>
    <div className="mb-2 block">
      <Label
        htmlFor="small"
       
      />
    </div>
{/*     
    <TextInput
      id="small"
      type="text"
      sizing="sm"
      className='w-64 '
    /> */}
    
  </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default SecondNavBar