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
   create =  new storeModel({
        name:req.body.name,
          img: req.body.img,
          ownerName:req.body.ownerName,
          description: req.body.description,
          location: req.body.location,
          storeType:req.body.storeType,
    })
 await   create.save(err =>{
        if(!err) return res.json(create);
        return res.status(400).json({message : `Error while creating store ${err}`})
    })
    
}

// delete store in localhost:8000

const deleteStore = async (req,res)=>{
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send('no store delete with that id')
  await storeModel.findByIdAndDelete(id);
   await productModel.deleteMany({storeId:id});
  res.json({message:'store deleted succesfully'})
}

// update store in localhost:8000
const updateStore = async (req,res)=>{
  const {id: _id} = req.params;
  const store = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')
    const updatedStore = await storeModel.findByIdAndUpdate(_id,store,{new:true});
    res.json(updatedStore)
}

// get store by id in localhost:8000
const getStoreById = async (req,res)=>{
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) 
  return res.status(404).send('no post with that id')
  const storeId = await storeModel.findById(id).populate({path:"products.productId"});
  res.json(storeId.products)
  }


module.exports = {
  getStores,
  createStore,
  deleteStore,
  updateStore,
  getStoreById
}