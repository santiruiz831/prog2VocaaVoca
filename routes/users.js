var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/' });

/* GET home page. */
router.get('/profile/:id', userController.profile);
router.get('/edit/:id', userController.editProfile);
router.post('/edit', userController.storeEdit);
router.get('/register', userController.register);
router.post('/register', upload.single('avatar') ,userController.store);
router.all('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/search', userController.search);

module.exports = router;