const express = require('express');
var router = express.Router();
const{getAllReviews, getReviewById, createReview, updateReview , deleteReview}= require('../Controllers/reviews')

// get All reviews
router.get('/',async (req,res,next)=>{
    
    var limit = parseInt(req.query.limit) || 10
    var skip = parseInt(req.query.skip) || 0
    try {
        var receivedReviews = await getAllReviews(limit, skip);
        res.status(200).send(receivedReviews);
    } catch (error) {
        res.status(421).send({message: error.message});
    }

})

// get review by Id
router.get('/:id',async (req,res,next)=>{
    var {id} = req.params;
    try {
        var receivedReview = await getReviewById(id);
        res.status(200).send(receivedReview);
    } catch (error) {
        res.status(421).send({message: error.message});
    }

})

// create new review
router.post('/',async (req,res,next)=>{
    review = req.body;
    try {
        var savedReview = await createReview(review);
        res.status(200).send(savedReview);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})

router.patch('/:id',async (req,res,next)=>{
    review = req.body;
    var {id} = req.params;
    try {
        var updatedReview = await updateReview(id,review);
        res.status(200).send(updatedReview);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})

router.delete('/:id',async (req,res,next)=>{
    var {id} = req.params
    try {
        var deletedReview = await deleteReview(id);
        res.status(200).send(deletedReview);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})



module.exports = router;