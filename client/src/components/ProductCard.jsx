import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"
import PopUpProduct from "./PopUpProduct"


function ProductCard({data}) {
  
  const dispatch = useDispatch()

  const addProductToCart = ()=>{
      dispatch(addToCart(data))
      console.log("hhhhhh");

  }
  const [productToCart,setProductToCart]=useState()
  const [open,setOpen]=useState(false)

  const [qty, setQty] = useState(0)

const sendBoolian = ()=>{
  setOpen(!open)
}
  return (
  <>
    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg  border-red  border bg-white max-w-sm ">
    <div>

      <img class="rounded-t-lg object-fill h-70 w-96 ... cursor-pointer" onClick={()=>setOpen(!open)} src={data?.img} alt=""/>
    </div>
    
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 text-right">{data?.name}</h5>
      <p class="text-gray-700 text-base mb-4 text-right">
      {data?.description}
      </p>
      {data?.quantity==0?<p className="text-right">אזל במלאי</p>:
        <div className="text-center">
          <button className=" rounded border-2 border-lime-600  w-7 h-7 text-lime-500 hover:text-white hover:bg-lime-500 " onClick={()=>{if(qty<10&&qty<data?.quantity )setQty(qty+1)}}>+</button>
          <span className="mx-3">{qty}</span>
          <button className="rounded border-2 border-lime-600 w-7 h-7 text-center" onClick={()=>{if(qty>0)setQty(qty-1)}}>-</button>
        </div>}
        <p className="text-right ">סה"כ <span className="italic"> {data?.price} </span></p>
      <button onClick={addProductToCart} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">הוסף לעגלה</button>

    </div>
  </div>
</div>
{open && <PopUpProduct data={data} setOpen={setOpen}/>}
</>
  )
}

export default ProductCard