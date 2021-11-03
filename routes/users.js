var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/' });

/* GET home page. */
router.get('/profile/:id', userController.profile);
router.get('/edit', userController.editProfile);
router.get('/register', userController.register);
router.post('/register', upload.single('avatar') ,userController.store);
router.all('/login', userController.login);
router.all('/logout', userController.logout);
router.get('/search', userController.search);

module.exports = router;