let CATEGORY = require('../model/category')

exports.categoryCreate = async function (req,res,next) {
    try {
        let findCategory = await CATEGORY.findOne({category : req.body.category})
        if (findCategory) {
            throw new Error("This Category Is Already Exists");
        }
        
        let categoryData = await CATEGORY.create(req.body)
        res.status(201).json({
            status : 'Success',
            message : "Category Create Successfully",
            data : categoryData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message 
        })
    }
}

exports.categoryFind = async function (req,res,next) {
    try {
        let categoryData = await CATEGORY.find()
        res.status(200).json({
            status : 'Success',
            message : "All Category Find Successfully",
            data : categoryData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.categoryFindOne = async function (req,res,next) {
    try {
        let id = req.params.id
        let categoryData = await CATEGORY.findById(id)
        res.status(200).json({
            status : 'Success',
            message : "One Category Find Successfully",
            data : categoryData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.categoryDelete = async function (req,res,next) {
    try {
        let id = req.params.id
        let deleteData = await CATEGORY.findById(id)
        if (!deleteData) {
            throw new Error("Category Already Deleted");
        }
        let categoryData = await CATEGORY.findByIdAndDelete(id)
        res.status(200).json({
            status : 'Success',
            message : "Category Delete Successfully",
            data : categoryData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}

exports.categoryUpdate = async function (req,res,next) {
    try {
        let id = req.params.id
        let categoryData = await CATEGORY.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({
            status : 'Success',
            message : "Category Update Successfully",
            data : categoryData
        })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
}