import React from 'react'
import { Sidebar, Avatar } from "flowbite-react";
import { HiInbox, HiArrowSmRight } from "react-icons/hi";
import { BsFillHouseFill, BsFillCameraFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import {BiStore } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useUpdateUserMutation} from '../store/apiSlice'
import { useEffect } from 'react';
const PersonalArea = () => {
  const [updateUser,{isSuccess}]= useUpdateUserMutation()
  const orders = [1,2,3];
  const user =useSelector(state=>state.auth.user)
  return (
    <div className="flex flex-col-reverse md:flex-row w-full md:w-3/4 bg-white mt-1 items-center m-auto md:h-fit my-3 p-5 shadow-xl">
    <div className="w-3/4 flex justify-center">
<Outlet />
      
    </div>
    <div>
      <Sidebar className="text-right" aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className="w-full ">
              <Avatar size="xl" rounded={true} />
              <label htmlFor="upload-profile" className="p-0">
                <input id="upload-profile" type="file" className="hidden" />
                <BsFillCameraFill className="text-2xl" />
              </label>
            </div>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
           {user?.permission==="ownerStore"&& <Link to="store">
              <Sidebar.Item icon={BiStore} >
               חנות שלי
              </Sidebar.Item>
            </Link>}
            <Link to="orders">
              <Sidebar.Item icon={HiInbox}>
                ההזמנות שלי
              </Sidebar.Item>
            </Link>
            <Link to="details">
              <Sidebar.Item icon={FaAddressCard}>מידע אישי</Sidebar.Item>
            </Link>
            <Link to="Address">
              <Sidebar.Item icon={BsFillHouseFill}>כתובת שלי</Sidebar.Item>
            </Link>
            <Link to="Password">
              <Sidebar.Item icon={AiFillLock}>החלפת סיסמא</Sidebar.Item>
            </Link>

            <Sidebar.Item icon={HiArrowSmRight}>התנתקות</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  </div>
  )
}

export default PersonalArea