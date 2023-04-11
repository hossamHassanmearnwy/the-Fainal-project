const mongoose = require('mongoose');


const categorieSchema = mongoose.Schema({
    catName:{
        type:String,
        required:[true, 'Category required'],
        unique:[true, 'Category must be unique'],
        minLength:5,
        maxLength:20,
    },
    // A and B => shopping.com/a-and-b
    slug:{
        type:String,
        lowercase: true,
    },
    image:{
        type:String,
    }
 


}, {timestamps: true});


const categorieModel = mongoose.model('categories', categorieSchema);

module.exports = categorieModel;
