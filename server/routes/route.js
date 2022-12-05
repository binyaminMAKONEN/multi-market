const routes = require('express').Router();
const controller = require('../controller/storeController');


routes.route('/api/stores')
     .post(controller.createStore)
     .get(controller.getStores)




module.exports = routes