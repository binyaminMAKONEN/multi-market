import React from 'react'
import { Navbar,Dropdown,Avatar ,Label,TextInput} from 'flowbite-react'
import { ImLocation } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {logOut,setCredentials,setGoogleUser} from "../store/userSlice";
import axios from 'axios';


function SecondNavBar() {
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
      src="https://i.postimg.cc/D0skf82c/2022-12-08-210836-preview-rev-1.png"
      className="mr-3 h-6 sm:h-9 "
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <p className='self-center'>מודיעין</p>
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
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={()=>logout()}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    
    <div>
    <div className="mb-2 block">
      <Label
        htmlFor="small"
       
      />
    </div>
    
    <TextInput
      id="small"
      type="text"
      sizing="sm"
      className='w-64 '
    />
    
  </div>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default SecondNavBar