
const expressAsyncHandler = require('express-async-handler');
// const fs = require('fs');
const slugify = require('slugify');
const catModel=require("../Models/categories")



// @desc: get all category
// @route: GET /category
// @access: puplic

exports.getCategories = expressAsyncHandler(async(req , res) => {
        const page =req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 4;
        const skip = (page - 1)* limit;
        const categories = await catModel.find({}).skip(skip).limit(limit);
        var receivedCategories = categories.filter((category)=>{
                return (!category.isDeleted)
        })
        if(receivedCategories.length >0){
                res.status(200 ).json({results: receivedCategories.length,page, data: receivedCategories})
        }else{
                res.json({msg: "No categories found"})
        }
        
});


// @desc: GET specific category
// @route: GET /category/:id
// @access: puplic


exports.getCategory = expressAsyncHandler(async(req , res) => {
        var {id} = req.params;
        const category = await catModel.findById(id);
        if(category.isDeleted){
                res.status(404 ).json({msg: `no category for this id ${id}`})
        }else{
        res.status(200 ).json({data:category})
}
});


// @desc: create specific category
// @route: POST /category
// @access: private


exports.createCategory = expressAsyncHandler(async(req , res) => {
        // var catName = req.body.catName;
        var catBody = req.body
        const category = await catModel.create(catBody);
        res.status(201).json({data:category})
});


// @desc: update specific category
// @route: PUT /category/:id
// @access: private


exports.updateCategory = async(req , res) => {
        var {id} = req.params;
        var catBody = req.body;
        const category = await catModel.findByIdAndUpdate(id,catBody);
        if(!category){
                res.status(404 ).json({msg: `no category for this id ${id}`})
        }else{
        res.status(200 ).json("category updated succefully")
        }
};


// @desc: delete specific category
// @route: DELETE /category/:id
// @access: private


exports.deleteCategory = expressAsyncHandler(async(req , res) => {
        var {id} = req.params;
        catBody = req.body
        catBody.isDeleted= true;
        const category = await catModel.findByIdAndUpdate(id,catBody);
        // category.isDeleted= true;
        if(!category || category.isDeleted){
                res.status(404 ).json({msg: `no category for this id ${id}`})
        }else{
                res.status(200).json({msg: "this category is deleted successfully"})
        }
        // res.status(200).json(category)
});
// module.exports={createCategory};