const mongoose = require("mongoose");

const PaymentDetailsModel = new mongoose.Schema({
  cardNumber: { type: Number, required: true },
  cardDate: { type: Number, required: true }
});

module.exports = mongoose.model("product", PaymentDetailsModel);