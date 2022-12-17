const mongoose = require('mongoose')

const authUser = new mongoose.Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
      email: {
        type: String,
        required: true,
      },
      photo:{
        type: String,
        required: true,
      }
},{ versionKey: false })

module.exports = mongoose.model("userAuth", authUser);
 
