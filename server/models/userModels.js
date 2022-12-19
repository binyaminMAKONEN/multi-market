const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  google_id:{
  type:String,
  require:false
  },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  img: { type: String, required: false },
  username: {
    type: String,
    required: false,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    min: 6,
  },
  phone : { type: String, required: false, min: 9, max: 12 },
  Permissions:{type: String,formType:"select",enum:["customer","ownerStore","admin"],required:true,default:"customer"},
},{ versionKey: false });

module.exports = mongoose.model("User", userModel);
