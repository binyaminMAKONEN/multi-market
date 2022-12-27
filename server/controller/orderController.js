const order = require('../models/orderModel')
const mongoose = require('mongoose')


const createOrders = async (req,res)=>{
    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
    create =await new order({...req.body,date:new Date()})
 await   create.save(err =>{
        if(!err) return res.json(create);
        return res.status(400).json({message : `Error while creating order ${err}`})
    })
}

const getOrders = async (req,res)=>{
    let data = await  order.find({})
    return res.json(data)
}
const getStoreOrCustomerOrderById = async(req,res)=>{
    const {id} = req.params
    let data = await  order.find({})
    let filterData = data.map(obg =>{
        let storeOrder =  obg.stores[0].storId 
        let customerOrder =  obg.clientId
        if (storeOrder==id || customerOrder ==id) {
         return obg
        }else if(customerOrder ==id){
            return obg
        }
        else{
            return  'We Not find any order for you'
        }
 
     })
    return res.json(filterData)
}
const getOrderByClientId = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {  
        return res.status(404).send('no orders with that id')
      }
      const storeId = await order.find({clientId:id})
      res.json(storeId).status(200)
      }

module.exports = {
   createOrders,
   getOrders,
   getStoreOrCustomerOrderById,getOrderByClientId
 

}
