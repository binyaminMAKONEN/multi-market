import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import InputUploadImage from "../Features/InputUploadImage";
import { useCreateProductsMutation, useGetStoreUserQuery } from "../store/apiSlice";

function AddProductStore() {
    const selector=useSelector(state=>state.auth.user)
    const {data:store,isFetching,isSuccess,isError}= useGetStoreUserQuery(selector.id);
    const [product, setProduct] = useState({
        name: "",
        img: "",
        quantity: "",
        price: "",
        storeName: "",
        productType: "",
        description: "",
        storeId: ""
    });
    const [createProduct]=useCreateProductsMutation()



  const productFull=Object.keys(product).filter(key=>product[key]!=="")

  
  const setImage = (img) => {
    console.log(img);
    setProduct({...product,img:img});
  };
  useEffect(()=>{
    setImage()
    if (isSuccess){
      let productStore={...product,storeId:store._id}
      productStore={...productStore,storeName:store.storeName}
      setProduct(productStore)
      }
  },[store])
console.log(product);

  return (
    <div className="overflow">
      <div className="w-full max-w-sm text-right overflow-auto">
        <h1 className="text-xl mb-5">הוספת מוצר </h1>
        <div class="flex flex-col outline-none items-center  border-b border-teal-500 py-2">
          <label  className="text-right w-full ">
            שם המוצר
            <input
            onChange={(e)=>setProduct({...product,name:e.target.value})}
              className="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="שם המוצר"
            />
          </label>

          <InputUploadImage setImage={setImage} />
          <label className="text-right w-full ">
            מחיר
            <input
            onChange={(e)=>{setProduct({...product,price:e.target.value})}}
              className="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
              type="number"
              placeholder="מחיר בשקלים"
            />
          </label>
          <label className="text-right w-full ">
            קטגוריות
            <input
            onChange={(e)=>{setProduct({...product,productType:e.target.value})}}
              className="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="נא לרשום לפחות קטגוריה אחת לפחות"
            />
          </label>
          <label className="text-right w-full ">
            מלאי מוצר
            <input
            onChange={(e)=>{setProduct({...product,quantity:e.target.value})}}
              className="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
              type="number"
              placeholder="נא לרשום לפחות קטגוריה אחת לפחות"
            />
          </label>

          <label className="text-right w-full ">
            תיאור מוצר
            <input
            onChange={(e)=>{setProduct({...product,description:e.target.value})}}
              className="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none"
              type="test-box"
              placeholder="תאר לי את המוצר"
            />
          </label>
        </div>
        <button onClick={()=>{createProduct([product])}} className={` m-3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ${productFull.length<=7&&"opacity-50 cursor-not-allowed"}`}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            הוסף מוצר לחנות
          </span>
        </button>
      </div>
    </div>
  );
}

export default AddProductStore;
