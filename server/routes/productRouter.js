
const {getProduct,createProducts, updateProduct, deleteProduct} =require('../controller/productController') 
const {tokenMiddleware} =require('../config/authenticateToken')
const router = require('express').Router()


     router.get('/',getProduct)
     router.post('/',createProducts)
     router.put('/:id',updateProduct)
     router.delete('/:id',deleteProduct)


     module.exports = router
