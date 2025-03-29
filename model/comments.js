let mongoose = require('mongoose')
let Schema = mongoose.Schema

let commentsSchema = new Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: [true, "Please Enter PostId"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true,'Please Enter UserId']
    },
    comments : {
        type : String,
        trim : true
    }
})

let COMMENTS = mongoose.model('comments',commentsSchema)
module.exports = COMMENTS