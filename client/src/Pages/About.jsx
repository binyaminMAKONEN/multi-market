import React from 'react'
import { 
  useGetProductsStoreByIdQuery ,
  useGetOrdersQuery,
  useGetStoreOrCustomerOrderByIdQuery
} from '../store/apiSlice'
const About = () => {
  const id ='639a13ba81192968d0c97fea'
  const {data}=useGetStoreOrCustomerOrderByIdQuery(id)
  console.log(data);
  const {data:orderData}=useGetOrdersQuery()
  // console.log(orderData);
  return (
    <>
<p>Heloo</p>
    </>
  )
}

export default About