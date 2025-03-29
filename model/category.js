let mongoose = require('mongoose')
let Schema = mongoose.Schema

let categorySchema = new Schema({
    category : {
        type : String,
        trim : true,
        unique : true,
        required : [true,"Please Enter Category"]
    },
    description : {
        type : String,
        trim : true
    }
})

let CATEGORY = mongoose.model('category',categorySchema)
module.exports = CATEGORY   