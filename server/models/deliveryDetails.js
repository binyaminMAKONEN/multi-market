const mongoose = require("mongoose");

const deliveryDetailsModel = new mongoose.Schema({
  street: { type: String,  required: true },
  streetTwo: { type: String,  required: false },
  companyName: { type: String,  required: true },
  zip: { type: Number,  required: true }
}); 

module.exports = mongoose.model("deliveryDetail", deliveryDetailsModel);
