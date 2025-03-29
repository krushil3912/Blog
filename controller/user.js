let USER = require("../model/user")
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "dhameliyakrushil2023@gmail.com",
      pass: "pwciyoszdvpkobpu",
    },
});

async function main(mail) {
    
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'dhameliyakrushil2023@gmail.com', // sender address
        to: mail, // list of receivers
        subject: "Event Management", // Subject line
        // text: "Hello Welcome to my event management site we can provide best and beautiful location and beautiful decoration for your event !!", // plain text body
        html: "<b>We Can Provide To You Best Deal For Your Events 🤑</b>", // html body
      });
    }


exports.userSingup = async function (req,res,next) {
    try {
        let findEmail = await USER.findOne({email : req.body.email})
        if (findEmail) {
            throw new Error("User Already Exists");
            
        }
        req.body.password = bcrypt.hashSync(req.body.password,10)
        
        let userData = await USER.create(req.body)

        await main(userData.email) // Mail sending
        res.status(201).json({
            status : "Succsess",
            message : "User Signup Successfully",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.userLogin = async function (req,res,next) {
    try {
        let userData = await USER.findOne({email : req.body.email})
        if (!userData) {
            throw new Error("User Not Found");
        }

        let passCheck = bcrypt.compareSync(req.body.password,userData.password)
        if (!passCheck) {
            throw new Error("Invalid Password");    
        }
        
        res.status(200).json({
            status : "Succsess",
            message : "User Login Successfully",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.userFind = async function (req,res,next) {
    try {
        let userData = await USER.find()
        
        res.status(200).json({
            status : "Succsess",
            message : "User All Data",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.userFindOne = async function (req,res,next) {
    try {
        let id = req.params.id
        let userData = await USER.findById(id)
        
        res.status(200).json({
            status : "Succsess",
            message : "User Find One Data",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.userDelete = async function (req,res,next) {
    try {
        let id = req.params.id
        let userData = await USER.findByIdAndDelete(id)
        
        res.status(200).json({
            status : "Succsess",
            message : "User Data Delete Successfully",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.userUpdate = async function (req,res,next) {
    try {
        let id = req.params.id
        let userData = await USER.findByIdAndUpdate(id,req.body,{new : true})
        req.body.password = bcrypt.hashSync(req.body.password,10)
        
        res.status(200).json({
            status : "Succsess",
            message : "User Data Update Successfully",
            data : userData
        })
        
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}