const product = require('../models/productModel')


// get all store in localhost:8000

const getProduct = async (req,res)=>{
    let data = await  product.find({})
    return res.json(data)
}

// create store in localhost:8000

const createProduct = async(req,res)=>{

    if(!req.body)return res.status(400).json('Post HTTP Data not Provided')
    create = await new product({
        name:req.body.name ,
        img: req.body.img,
        quantity:req.body.quantity ,
        price:req.body.price ,
        storeName:req.body.storeName ,
        productType:req.body.productType ,
        storeId:req.body.storeId ,
    })
 await   create.save(err =>{
        if(!err) return res.json(create);
        return res.status(400).json({message : `Error while creating product ${err}`})
    })
    
}
module.exports = {
    getProduct,
  createProduct
}