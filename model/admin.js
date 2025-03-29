let mongoose = require('mongoose')
let Schema = mongoose.Schema

let adminSchema = new Schema({
    email:{
        type : String,
        trim : true,
        unique : true,
        required : [true,"Please Enter E-mail"]
    },
    password:{
        type : String,
        trim : true,
        required : [true,"Please Enter Password"]
    },

})

let ADMIN = mongoose.model('admin',adminSchema)
module.exports = ADMIN
