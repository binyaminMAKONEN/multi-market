const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  img: { type: String, required: true },
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    min: 6,
  },
  phone: { type: String, required: true, min: 9, max: 12 },
  owner:{type:Boolean,default:false},
});

module.exports = mongoose.model("User", userModel);
