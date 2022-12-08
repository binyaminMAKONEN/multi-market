const product = require('../models/productModel')
const {addProducts} =require("../methods/productsMethod")

// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  product.find({})
    return res.json(data)
}

// create store in localhost:8000

const addProducts = async (req,res) => {
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

    products = Promise.all(products);

    return products;
  } catch (err) {
    throw `Err : ${err}`;
  }
};

const updateStoreProducts = async (storeId, productId) =>{
try {
    console.log(storeId, productId);
    await Store.findByIdAndUpdate(storeId,{$push:{products:{productId}}})
} catch (err) {
    throw `Err : ${err}`;
}
};

module.exports = {
  getProduct,
  addProducts,
  // updateStoreProducts
}