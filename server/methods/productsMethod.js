const Product = require("../models/productModel");
const Store = require("../models/storeModel");

exports.addProducts = async (arr) => {
  try {
    let products = arr.map(async (obj) => {
      const product = new Product(obj);
      const productId = product.id;
      const storeId = obj.storeId;
      if (!mongoose.Types.ObjectId.isValid(storeId)){
        return res.status(404).send("not exist in database")
      }
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
