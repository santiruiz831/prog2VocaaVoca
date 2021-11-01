var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

/* GET home page. */
router.get('/profile/:id', userController.profile);
router.get('/edit', userController.editProfile);
router.get('/register', userController.register);
router.post('/register', userController.store);
router.all('/login', userController.login);
router.all('/logout', userController.logout);
router.get('/search', userController.search);

module.exports = router;