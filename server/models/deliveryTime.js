const mongoose = require("mongoose");

const deliveryTimeModel = new mongoose.Schema({
  orderTime: { type: Date, required: true }
});

module.exports = mongoose.model("product", deliveryTimeModel);