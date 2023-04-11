
const express = require('express');
var router = express.Router();
var {createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../Controllers/categories')
const fs = require('fs')
var catModel = require('../Models/categories')




router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory).patch(updateCategory).delete(deleteCategory)







module.exports=router;