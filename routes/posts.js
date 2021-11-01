var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

let postController = require('../controllers/postController')

/* GET home page. */
router.get('/detail/:id?', postController.detail);
router.get('/add', postController.addPost);
router.post('/add', postController.create);
router.get('/search', postController.search);

router.get('/:id/delete', postController.delete);
router.get('/:id/edit', postController.edit);
router.post('/:id/edit', postController.update);

module.exports = router;
