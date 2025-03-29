let POST = require("../model/post")

exports.postCreate = async function (req,res,next) {
    try {

        let postData = await POST.create(req.body)

        res.status(201).json({
            status : "Success",
            message : "Post Create Successfully",
            data : postData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.postFind = async function (req,res,next) {
    try {

        let postData = await POST.find().populate([
            { path: 'userId' },
            { path: 'categoryId' }
        ])

        res.status(200).json({
            status : "Success",
            message : "Post Find Successfully",
            data : postData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.postFindOne = async function (req,res,next) {
    try {
        let id = req.params.id
        
        let postData = await POST.findById(id).populate([
            { path: 'userId' },
            { path: 'categoryId' }
        ])

        res.status(200).json({
            status : "Success",
            message : "Post Find One Successfully",
            data : postData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.postDelete = async function (req,res,next) {
    try {
        let id = req.params.id
        let checkDelete = await POST.findById(id)
        if (!checkDelete) {
            throw new Error("Your Post Not Found");
        }
        await POST.findByIdAndDelete(id)

        res.status(200).json({
            status : "Success",
            message : "Post Delete Successfully",
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.postUpdate = async function (req,res,next) {
    try {
        let id = req.params.id
        
        let postData = await POST.findByIdAndUpdate(id,req.body,{new : true}).populate([
            { path: 'userId'},
            { path: 'categoryId'}
        ])

        res.status(200).json({
            status : "Success",
            message : "Post Update Successfully",
            data : postData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}