const store = require('../models/storeModel')


// get all store in localhost:8000

const getStores = async (req,res)=>{
    let data = await  store.find({})
    return res.json(data)
}

// create store in localhost:8000

const createStore = async(req,res)=>{

    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
    create =await new store({
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
module.exports = {
  getStores,
  createStore
}