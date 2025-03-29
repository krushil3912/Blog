var express = require('express');
var router = express.Router();
let commentsController = require('../controller/comments')

/* GET home page. */
router.post('/create',commentsController.commentsCreate);
router.get('/find',commentsController.commentsFind);
router.delete('/delete/:id',commentsController.commentsDelete);
router.patch('/update/:id',commentsController.commentsUpdate);

module.exports = router;
