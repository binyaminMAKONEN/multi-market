const Product = require('../models/productModel')
const Store = require('../models/storeModel')
// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  Product.find({})
    return res.json(data)
}

// create store in localhost:8000

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
};

module.exports = {
  getProduct,
  createProducts,
}