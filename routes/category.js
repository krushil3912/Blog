var express = require('express');
var router = express.Router();
let categoryController = require("../controller/category")
let adminAuth = require('../middelware/adminAuth')


/* GET category listing. */
router.post('/create',categoryController.categoryCreate)
router.get('/find',categoryController.categoryFind)
router.get('/findone/:id',categoryController.categoryFindOne)
router.delete('/delete/:id',adminAuth.Auth,categoryController.categoryDelete)
router.patch('/update/:id',adminAuth.Auth,categoryController.categoryUpdate)



module.exports = router;