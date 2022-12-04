const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  storeName: { type: String, required: true },
  productType: { type: String, required: true },
});

module.exports = mongoose.model("product", productModel);
