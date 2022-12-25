const router = require('express').Router();
const { createUser, login, getUsers,getByEmail } = require('../controller/usercontroller')

router.get('/',getUsers)
router.get('/email',getByEmail)
router.post('/register',createUser)//permission to admin
router.post('/login',login)


module.exports = router
