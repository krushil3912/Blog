let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    firstname :{ 
        type : String,
        trim : true,
        required : [true,"Please Enter First Name"]
    },
    lastname:{
        type : String,
        trim : true,
        required : [true,"Please Enter Last Name"]   
    },
    email:{
        type : String,
        trim : true,
        unique : true,
        required : [true,"Please Enter E-mail"]   
    },
    password : {
        type : String,
        trim : true,
        required :[true,"Please Enter Password"]
    },
    image :{
        type :String
    }

})

let USER = mongoose.model('user',userSchema)
module.exports = USER