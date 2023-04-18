const offersModel = require('../Models/Offer')

function getAllOffers(limit, skip){
    return offersModel.find().limit(limit).skip(skip)
}

function getOfferById(id){
    return offersModel.findById(id);
}

function createOffer (offer){
    return offersModel.create(offer);
}

function updateOffer(id, offer){
    return offersModel.updateOne({_id:id}, offer);
}

function deleteOffer(id){
    return offersModel.deleteOne({_id:id})

};
module.exports= {getAllOffers, getOfferById, createOffer, updateOffer , deleteOffer}