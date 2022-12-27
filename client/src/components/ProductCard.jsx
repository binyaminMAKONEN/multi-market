import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"
import PopUpProduct from "./PopUpProduct"


function ProductCard({data}) {
  
  const dispatch = useDispatch()

  const addProductToCart = ()=>{
      dispatch(addToCart(data))

  }
  // const [productToCart,setProductToCart]=useState()
  const [open,setOpen]=useState(false)

  const [qty, setQty] = useState(0)

const sendBoolian = ()=>{
  setOpen(!open)
}
  return (
  <>
    <div className="flex justify-center w-52">
  <div className="rounded-lg shadow-lg  border-red  border bg-white max-w-sm ">
    <div>

      <img className="rounded-t-lg object-fill h-70 w-96 ... cursor-pointer" onClick={()=>setOpen(!open)} src={data?.img} alt=""/>
    </div>
    
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2 text-right">{data?.name}</h5>
      <p className="text-gray-700 text-base mb-4 text-right">
      {data?.description}
      </p>
        <p className="text-right ">סה"כ <span className="italic"> {data?.price} </span></p>
      <button onClick={addProductToCart} type="button" className=" inline-block px-6 py-2.5 bg-lime-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out">הוסף לעגלה</button>

    </div>
  </div>
</div>
{open && <PopUpProduct data={data} setOpen={setOpen}/>}
</>
  )
}

export default ProductCard