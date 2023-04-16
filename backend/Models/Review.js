const mongoose = require('mongoose');
const reviewsSchema = mongoose.Schema({
    comment:{
        type: 'string',
        required: true,
        trim:true
    },

    products:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"Product",
        required: true
    }
}, {timestamps: true});


const reviewsModel = mongoose.model('Review', reviewsSchema);

module.exports = reviewsModel;
