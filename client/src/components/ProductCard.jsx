import { useState } from "react"


function ProductCard(props) {
  const [productToCart,setProductToCart]=useState()
  const [qty, setQty] = useState(0)


  return (
    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg  border-red  border bg-white max-w-sm ">
    <a href="#!">
      <img class="rounded-t-lg w-fit"  src={props.data.img} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 text-right">{props.data.name}</h5>
      <p class="text-gray-700 text-base mb-4 text-right">
      {props.data.description}
      </p>
      {props.data.quantity==0?<p className="text-right ">אזל במלאי</p>:
        <div className="flex justify-around ">
          <button className=" rounded-full w-6 text-lime-500 hover:text-white hover:bg-lime-500 " onClick={()=>{if(qty<10&&qty<props.data.quantity )setQty(qty+1)}}>+</button><span>{qty}</span><button className=" rounded-full text-lime-500 hover:text-white hover:bg-lime-500 w-6" onClick={()=>{if(qty>0)setQty(qty-1)}}>-</button>
        </div>}
      <button className=" " type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard