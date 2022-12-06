const product = require('../models/productModel')
const {addProducts} =require("../methods/productsMethod")

// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  product.find({})
    return res.json(data)
}

// create store in localhost:8000

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
    getProduct,
  createProduct
}