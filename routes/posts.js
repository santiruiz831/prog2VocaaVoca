var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

let postController = require('../controllers/postController')

/* GET home page. */
router.get('/detail/:id?', postController.detail);

router.get('/add', postController.addPost);
router.post('/add', upload.single('img'), postController.create);

router.get('/search', postController.search);
router.post('/comment', postController.comment);

router.post('/:id/delete', postController.delete);

router.get('/:id/edit', postController.edit);
router.post('/:id/edit', upload.single('img'), postController.update);

router.get('/:id/like', postController.like);
router.get('/:id/dislike', postController.dislike);

module.exports = router;
