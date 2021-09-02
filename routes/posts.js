var express = require('express');
var router = express.Router();
let postController = require('../controllers/postController')

/* GET home page. */
router.get('/detail', postController.detail)

module.exports = router;
