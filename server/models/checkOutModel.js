const mongoose = require("mongoose");

const checkOutModel = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  storeName: { type: String, required: true },
  productType: { type: String, required: true },
  storeId:{ type: mongoose.SchemaTypes.ObjectId, ref: "store" },
  
});

module.exports = mongoose.model("product", checkOutModel);