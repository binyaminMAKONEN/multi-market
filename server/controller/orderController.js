const order = require('../models/orderModel')
const {addOrders} =require("../methods/ordersMethod")
// const bcrypt = require('bcrypt');


// get all store in localhost:8000

const getOrders = async (req,res)=>{
    let data = await order.find({})
    return res.json(data)
}

// create store in localhost:8000
const createOrders = async(req,res)=>{

    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
   try {
    const obj=req.body
    const data=await addOrders(obj)
    res.status(200).json(data)
 } catch (err) {
    return res.status(400).json({message : `Error while creating product ${err}`})
 }
    
}



module.exports = {
    getOrders,
    createOrders
}