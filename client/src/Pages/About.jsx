import React from 'react'
import {useGetProductsQuery} from "../store/apiSlice"
const About = () => {
const {data}=useGetProductsQuery()
console.log(data);
  return (
    <>
<p>Heloo</p>
    </>
  )
}

export default About