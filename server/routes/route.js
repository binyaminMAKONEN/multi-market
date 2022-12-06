const routes = require('express').Router();
const storesController = require('../controller/storeController');
const productController = require('../controller/productController')
const userController = require('../controller/usercontroller')

routes.route('/api/stores')
     .post(storesController.createStore)
     .get(storesController.getStores)


routes.route('/api/products')
     .get(productController.getProduct)
     .post(productController.createProduct)


routes.route('/api/users/register')
     .post(userController.createUser)

routes.route('/api/users/login')
     .post(userController.login)



 

module.exports = routes