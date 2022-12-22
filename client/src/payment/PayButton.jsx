import axios  from 'axios'
import {useSelector} from 'react-redux'

const url =" localhost://8080/api/stripe/"


const PayButton=() => {
    const user = useSelector((state)=>state.auth)

    const handleCheckout = (cartItems)=>{
        axios.post(`${url}create-checkout-session`,{
          cartItems,
          userId:user._id  
        }).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err)=>console.log(err.message))
    }
  return (
    <>
    <button onClick={()=>handleCheckout()}>check out</button></>
  )
}

export default PayButton