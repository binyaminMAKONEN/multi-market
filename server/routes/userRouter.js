const router = require('express').Router();
const { createUser, login } = require('../controller/usercontroller')




router.post('/register',createUser)//permission to admin
router.post('/login',login)



module.exports = router
