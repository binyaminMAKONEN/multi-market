const routes = require('express').Router();
const storesController = require('../controller/storeController');
const productController = require('../controller/productController')


routes.route('/api/stores')
     .post(storesController.createStore)
     .get(storesController.getStores)


routes.route('/api/products')
     .get(productController.getProduct)
     .post(productController.createProduct)





module.exports = routes