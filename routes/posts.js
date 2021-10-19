var express = require('express');
var router = express.Router();
let postController = require('../controllers/postController')

/* GET home page. */
router.get('/detail/:id?', postController.detail);
router.get('/add', postController.addPost);
router.post('/create', postController.create);
router.get('/search', postController.search);
router.get('/delete', postController.delete);
router.get('/edit', postController.edit);
router.post('/edit', postController.edit);

module.exports = router;
