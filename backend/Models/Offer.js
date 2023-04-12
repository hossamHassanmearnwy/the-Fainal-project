const mongoose = require('mongoose');

const offersSchema = mongoose.Schema({


    title: {
        type: 'string',
        minLength: 5,
        maxLength: 100,
        unique: true,
        // required: true,
        trim: true
    },
    amount: {
        type: 'number',
        // required: true
    },
    ceria: {
        type: 'number',
        // required: true
    },
    description: {
        type: 'string',
        trim: true,
        // required: true
    }

}, { timestamps: true })

const offersModel = mongoose.model('Offers', offersSchema);


module.exports = offersModel;