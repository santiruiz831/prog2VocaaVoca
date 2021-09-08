var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

/* GET home page. */
router.get('/profile', userController.profile);
router.get('/edit', userController.editProfile);
router.get('/register', userController.register);
router.get('/login', userController.login)

module.exports = router;