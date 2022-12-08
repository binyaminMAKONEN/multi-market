const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
  street: { type: String,  required: true },
  streetTwo: { type: String,  required: false },
  companyName: { type: String,  required: true },
  zip: { type: Number,  required: true },
  orderTime: { type: Date,  required: true,default:Date() },
  cardNumber: { type: Number,  required: true },
  cardDate: { type: Number,  required: true },
  updateQuantity:[{productId:{ type:String },quantity:{type:Number}}]


},  { versionKey: false }); 

module.exports = mongoose.model("order", orderModel);
