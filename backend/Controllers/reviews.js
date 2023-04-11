const reviewsModel = require('../Models/Review')

function getAllReviews(limit, skip){
    return reviewsModel.find().limit(limit).skip(skip)
}

function getReviewById(id){
    return reviewsModel.findById(id);
}

function createReview (review){
    return reviewsModel.create(review);
}

function updateReview(id, review){
    return reviewsModel.updateOne({_id:id}, review);
}

function deleteReview(id){
    return reviewsModel.deleteOne({_id:id})

};
module.exports= {getAllReviews, getReviewById, createReview, updateReview , deleteReview}