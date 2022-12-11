const mongoose = require('mongoose')
const storeModel = require('../models/storeModel')
const productModel = require('../models/productModel')


// get all store in localhost:8000

const getStores = async (req,res)=>{
    let data = await  storeModel.find({})
    return res.json(data)
}

// create store in localhost:8000

const createStore = async(req,res)=>{

    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
    try {
      const create =  new storeModel({
        storeName:req.body.storeName,
        userId:req.body.userId,
        image:{
          logo:req.body.logo,
          background:req.body.background},
          ownerName:req.body.ownerName,
          description: req.body.description,
          location: req.body.location,
          storeType:req.body.storeType,
        })
        await create.save()
         res.status(200).json('create store')
    } catch (err) {
     console.log(err.message); 
    }
  
}

// delete store

const deleteStore = async (req,res)=>{
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){  
    return res.status(404).send('no store delete with that id')
  } 
  await storeModel.findByIdAndDelete(id);
   await productModel.deleteMany({storeId:id});
  res.json({message:'store deleted succesfully'})
} 

// update store 
const updateStore = async (req,res)=>{
  const {id} = req.params;
  const store = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('no post with that id')
  } 
    const updatedStore = await storeModel.findByIdAndUpdate(id,store,{new:true});
    await productModel.updateMany({storeId:id},{$set:{storeName:store.storeName}});
    res.json(updatedStore)
}

// get store by id
const getProductsStoreById = async (req,res)=>{
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {  
    return res.status(404).send('no post with that id')
  }
  const storeId = await storeModel.findById(id).populate({path:"products.productId"});
  res.json(storeId.products)
  }


module.exports = {
  getStores,
  createStore,
  deleteStore,
  updateStore,
  getProductsStoreById
}