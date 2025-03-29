let express = require('express')
let router = express.Router()
let postController = require('../controller/post')
let adminAuth = require('../middelware/adminAuth')


router.post('/create', postController.postCreate)  
router.get('/find', postController.postFind)  
router.get('/findone/:id', postController.postFindOne)  
router.delete('/delete/:id',adminAuth.Auth, postController.postDelete)  
router.patch('/update/:id',adminAuth.Auth, postController.postUpdate)  

module.exports = router;