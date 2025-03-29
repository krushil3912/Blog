var express = require('express');
var router = express.Router();
let userController = require('../controller/user')
let adminAuth = require('../middelware/adminAuth')


let multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

/* GET users listing. */
router.post('/signup',userController.userSingup)
router.post('/login', userController.userLogin)
router.get('/find', userController.userFind)
router.get('/findone/:id', userController.userFindOne)
router.delete('/delete/:id',adminAuth.Auth, userController.userDelete)
router.patch('/update/:id',adminAuth.Auth, userController.userUpdate)

module.exports = router;
