let COMMENTS = require('../model/comments')

exports.commentsCreate = async function (req, res, next) {
    try {
        let commentsData = await COMMENTS.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "Comment Create SuccessFully",
            data: commentsData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.commentsFind = async function (req, res, next) {
    try {
        let commentsData = await COMMENTS.find().populate([
            { path: 'userId' },
            { path: 'postId' }
        ])

        res.status(200).json({
            status: "Success",
            message: "Find All Comment SuccessFully",
            data: commentsData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.commentsDelete = async function (req, res, next) {
    try {
        let id = req.params.id
        
        let checkDelete = await COMMENTS.findById(id)
        if (!checkDelete) {
            throw new Error("Your Comment Not Found");
        }
        await COMMENTS.findByIdAndDelete(id)
        
        res.status(200).json({
            status: "Success",
            message: "Comment Delete Successfully"
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.commentsUpdate = async function (req, res, next) {
    try {
        let id = req.params.id
        let commentsData = await COMMENTS.findByIdAndUpdate(id, req.body, { new: true }).populate([
            { path: 'userId' },
            { path: 'postId' }
        ])

        res.status(200).json({
            status: "Success",
            message: "Comment Update SuccessFully",
            data: commentsData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}
