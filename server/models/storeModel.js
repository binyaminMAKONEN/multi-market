const mongoose = require("mongoose");

const product =new mongoose.Schema(
  {
    productId: { type: mongoose.SchemaTypes.ObjectId, ref: "product" }
  },
  { _id: false }
)

const storeModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: String,
  ownerName: {
    type: String,
    required: true,
  },
  products:[product],
  description: {
    type: String,
    required: true,
    min: 6,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    address: String,
    area: String,
  },
  storeType: {
    type: String,
    required: true,
  },
  
},  { versionKey: false }
)

 module.exports = mongoose.model("store", storeModel);

 
