const Product = require('../models/productModel');
const Store =require('../models/storeModel');
const {addProducts} =require("../methods/productsMethod");
const { default: mongoose } = require('mongoose');

// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  Product.find({})
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
const updateProduct = async (req,res)=>{
  try {
    const obj = {
      name: req.body.name,
      img: req.body.img,
      quantity: req.body.quantity,
      price: req.body.price,
      productType: req.body.productType,
      description: req.body.description,
    };
    console.log(obj);
    const updateProducts = await Product.findByIdAndUpdate(
      req.params.id,
      {$set:obj}
      
    )
    res.status(200).json(updateProducts)
  } catch (error) {
    throw error
    
  }
}
  const deleteProduct = async (req, res) => {
    const productId=req.params.id
    if (!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(404).send("not working")
    }
  
   const product= await Product.findByIdAndDelete(productId)
   const storeId = product.storeId.toString()
   console.log(storeId);
   
    await Store.findByIdAndUpdate(storeId,{$pull:{products:{productId}}})
    res.status(200).json('deleted product')
 
  }

module.exports = {
    getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}