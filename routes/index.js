var express = require('express');
var router = express.Router();
let mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index)

router.get('/feed/:id/like', mainController.like);
router.get('/feed/:id/dislike', mainController.dislike);

module.exports = router;
