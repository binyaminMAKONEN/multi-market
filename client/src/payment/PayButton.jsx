import axios  from 'axios'
import {useSelector} from 'react-redux'

const url =" http://localhost:8080/api/stripe/"


const PayButton=() => {
    const {cartItem} = useSelector((state)=>state.cart)
    
    const handleCheckout = ()=>{
      axios.post(`${url}create-checkout-session`,{
        cartItem,
      }).then((res)=>{
        if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err)=>console.log(err.message))
    }
  return (
    <>
    <button className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700' onClick={()=>handleCheckout()}>click hear to pay</button></>
  )
}

export default PayButton