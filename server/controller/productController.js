<<<<<<< HEAD
const Product = require('../models/productModel')
const Store = require('../models/storeModel')
// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  Product.find({})
=======
const product = require('../models/productModel')
const {addProducts} =require("../methods/productsMethod")

// get all products in localhost:8000

const getProducts = async (req,res)=>{
    let data = await  product.find({})
>>>>>>> 81e6685ef4ce57af8eda48c35e6e3b923ccb0368
    return res.json(data)
}

// get products by sore id

<<<<<<< HEAD
const createProducts = async (req,res) => {
  if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
  try {
    const arr=req.bod
    let products = arr.map(async (obj) => {
      const product = new Product(obj);
      const productId = product.id;
      const storeId = obj.storeId;
      await updateStoreProducts(storeId,productId)
      await product.save();
      return product;
    });
=======
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
>>>>>>> 81e6685ef4ce57af8eda48c35e6e3b923ccb0368

    products = Promise.all(products);

    return products;
  } catch (err) {
    throw `Err : ${err}`;
  }
};

  // this function is update the store when add product
const updateStoreProducts = async (storeId, productId) =>{
try {
    console.log(storeId, productId);
    await Store.findByIdAndUpdate(storeId,{$push:{products:{productId}}})
} catch (err) {
    throw `Err : ${err}`;
}
<<<<<<< HEAD
};

module.exports = {
  getProduct,
  createProducts,
=======


module.exports = {
    getProducts,
  createProduct
>>>>>>> 81e6685ef4ce57af8eda48c35e6e3b923ccb0368
}