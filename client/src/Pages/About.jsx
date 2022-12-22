import React from 'react'
import {useGetProductsQuery} from "../store/apiSlice"
import { Modal } from "flowbite-react";
import { useState } from 'react';
import PopUpProduct from '../components/PopUpProduct';

const About = () => {
const [open,setOpen] = useState(false)
console.log(open);
  return (
    <>
  <PopUpProduct/> 
    </>
  )
}

export default About