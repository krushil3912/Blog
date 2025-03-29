let ADMIN = require('../model/admin')
let bcrypt = require('bcrypt')

exports.adminsignup = async function (req ,res, next) {
    try {
        let findEmail = await ADMIN.findOne({email : req.body.email})
        if (findEmail) {
            throw new Error("Admin Already Exists");
        }
        req.body.password = bcrypt.hashSync(req.body.password,10)
        let adminData = await ADMIN.create(req.body)

        res.status(201).json({
            status : "Success",
            message : "Admin Signup Successfully",
            data : adminData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })   
    }
}

exports.adminlogin = async function (req ,res, next) {
    try {
        let adminData = await ADMIN.findOne({email : req.body.email})
        if (!adminData) {
            throw new Error("Admin not Found");
        }
        
        let passCheck = bcrypt.compareSync(req.body.password, adminData.password)
        if (!passCheck) {
            throw new Error('Invalid Password')
        }

        let token = jwt.sign({id:userData._id},'SECURE')

        res.status(200).json({
            status : "Success",
            message : "Admin Login Success",
            data : adminData ,
            token
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })   
    }
}