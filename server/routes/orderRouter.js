const router = require('express').Router()
const { getOrders, createOrders, getStoreOrCustomerOrderById,getOrderByClientId}= require('../controller/orderController')


router.get('/',getOrders)//permission to admin
router.post('/',createOrders)// permission to any user that log in
router.get('/:id',getStoreOrCustomerOrderById)
router.get('/user/:id',getOrderByClientId)









module.exports = router