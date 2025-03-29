var express = require('express');
var router = express.Router();
let adminController = require("../controller/admin")

/* GET users listing. */
router.post('/signup',adminController.adminsignup) 
router.post('/login',adminController.adminlogin) 

module.exports = router;