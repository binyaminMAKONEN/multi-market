const product = require('../models/productModel')
const {addProducts} =require("../methods/productsMethod")

// get all products in localhost:8000

const getProducts = async (req,res)=>{
    let data = await  product.find({})
    return res.json(data)
}

// get products by sore id

const getProductsByStoreId=async(req,res)=>{
  if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
  try {
    const storeId=req.body
    const data=await productsStore(storeId)//this function get id store and return all products that in store
    res.status(200).json(data)
 } catch (err) {
    return res.status(400).json({message : `Error while creating product ${err}`})
 }
}

// create store in localhost:8000
//get Array
const createProduct = async(req,res)=>{

    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
   try {
    const arr=req.body
    const data=await addProducts(arr)
    res.status(200).json(data)
 } catch (err) {
    return res.status(400).json({message : `Error while creating product ${err}`})
 }
    
}


module.exports = {
    getProducts,
  createProduct
}