const userModel = require('../models/userModels')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {generateAccessToken} =require('../config/authenticateToken')

const createUser = async (req,res)=>{
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        //create new user
        const newUser = new userModel({
            name:req.body.name,
              img:req.body.img,
              username:req.body.username,
              email:req.body.email,
              password:hashedPassword,
              phone:req.body.phone,
              owner:req.body.owner,
        });  
    
        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user._id);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
}
const login =async (req,res)=>{
 try {
    
    const user = await userModel.findOne({username:req.body.username});
    !user && res.status(400).json('Wrong username or password')
    
    const validPassword =  await bcrypt.compare(
        req.body.password,
        user.password
    )
    console.log(validPassword);
    !validPassword && res.status(400).json('Wrong username or password')
    const refreshToken=jwt.sign({role:user.Permissions,userId:user._id},process.env.REFRESH_TOKEN_SECRET)
    console.log(refreshToken);
    const token =generateAccessToken({role:user.Permissions,userId:user._id})

    res.status(200).json({token,refreshToken})
    
  } catch (err) {
    console.log(err);
    res.status(500).json({err:err.massage})
    
  }
}

module.exports = {
    createUser,
    login
}
