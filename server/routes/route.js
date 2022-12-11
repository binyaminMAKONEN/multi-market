const routes = require('express').Router();
const storesController = require('../controller/storeController');
// const productController = require('../controller/productController')
const userController = require('../controller/usercontroller')
const orderController = require('../controller/orderController')


routes.route('/api/stores')
.post(storesController.createStore)
.get(storesController.getStores)


routes.route('/api/orders')
     .get(orderController.getOrders)
     .post(orderController.createOrders)

routes.route('/api/orders/:id')
     .get(orderController.getStoreOrCustomerOrderById)


// routes.route('/api/products')
//      .get(productController.getProduct)
//      .post(productController.createProduct)

routes.route('/api/stores/:id')
.delete(storesController.deleteStore)
.put(storesController.updateStore)
.get(storesController.getProductsStoreById)





routes.route('/api/users/register')
     .post(userController.createUser)

routes.route('/api/users/login')
     .post(userController.login)



 

module.exports = routes