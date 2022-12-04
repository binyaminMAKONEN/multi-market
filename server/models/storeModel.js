const mongoose = require("mongoose");

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
});

 module.exports= mongoose.model("stores", storeModel);

 
