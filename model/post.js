let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
    title :{
        type : String,
        trim : true,
        required : [true,"Please Enter Title"],
        unique : true
    },
    content :{
        type : String,
        trim : true,
        required : [true,"Please Enter Content"]
    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        trim : true,
        required : [true,"Please Enter UserId"],
        ref : 'user'
    },
    categoryId :{
        type : mongoose.Schema.Types.ObjectId,
        trim : true,
        required : [true,"Please Enter Category"],
        ref : 'category'
    },
    image :{
        type : [String],
        required : [true,'Please Upload Image']
    }
})

let POST = mongoose.model('post',postSchema)
module.exports = POST