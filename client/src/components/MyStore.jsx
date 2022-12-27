import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsStoreByUserIdQuery,useDeleteProductMutation } from "../store/apiSlice";
import Spinner from "../Features/Spinner";
import ProductCard from "../components/ProductCard";
import AddProduct from "../components/AddProductStore"

export default function MyStore() {
  const [addProduct, setAddProduct] = useState(false)
  const dispatch=useDispatch()
  const user = useSelector((state) => state.auth.user);
  console.log(user.id);
  let { data: storePro, isSuccess } = useGetProductsStoreByUserIdQuery(
    user.id
  );
  const[deleteProduct]=useDeleteProductMutation()

  return (
    <>
   {!addProduct?<div className="h-screen overflow-auto">
        <table class="min-w-full border-collapse block md:table">
          <thead class="block md:table-header-group">
            <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
               שם מוצר
              </th>
              <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                מחיר
              </th>
              <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              כמות מלאי
              </th>
              <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              תיאור מוצר
              </th>
              <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                פעולות
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {isSuccess ? (
              storePro.map((obj) => (
                <>
                  	<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">שם המוצר</span>{obj.productId?.name}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">מחיר </span>{obj.productId?.price}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">כמות מלאי </span>{obj.productId?.quantity}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">תיאור מוצר</span>{obj.productId?.description}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button onClick={()=>{dispatch(deleteProduct(obj.productId?._id))}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
                </>
              ))
            ) : (
              <Spinner />
            )}
          </tbody>
        </table>
        <button class="bg-lime-500 hover:bg-lime-700 text-white font-bold py-1 px-2 border border-lime-500 rounded" onClick={()=>{setAddProduct(!addProduct)}}>Add product</button>
      </div>:<div className="h-screen overflow-auto" ><AddProduct/><p className="text-blue-500 cursor-pointer" onClick={()=>{setAddProduct(!addProduct)}}>back to edit</p></div>}
    </>
  );
}
