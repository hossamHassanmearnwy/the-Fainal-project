const express = require('express');
var router = express.Router();
const{getAllOffers, getOfferById, createOffer, updateOffer , deleteOffer}= require('../Controllers/offers')

// get All Offers
router.get('/',async (req,res,next)=>{
    
    var limit = parseInt(req.query.limit) || 10
    var skip = parseInt(req.query.skip) || 0
    try {
        var receivedOffers = await getAllOffers(limit, skip);
        res.status(200).send(receivedOffers);
    } catch (error) {
        res.status(421).send({message: error.message});
    }

})

// get offer by Id
router.get('/:id',async (req,res,next)=>{
    var {id} = req.params;
    try {
        var receivedOffer = await getOfferById(id);
        res.status(200).send(receivedOffer);
    } catch (error) {
        res.status(421).send({message: error.message});
    }

})

// create new offer
router.post('/',async (req,res,next)=>{
    var offer = req.body;
    try {
        var savedOffer = await createOffer(offer);
        res.status(200).send(savedOffer);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})

router.patch('/:id',async (req,res,next)=>{
    var offer = req.body;
    var {id} = req.params;
    try {
        var updatedOffer = await updateOffer(id,offer);
        res.status(200).send(updatedOffer);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})

router.delete('/:id',async (req,res,next)=>{
    var {id} = req.params
    try {
        var deletedOffer = await deleteOffer(id);
        res.status(200).send(deletedOffer);
    } catch (error) {
        res.status(421).send({message: error.message});
    }
})



module.exports = router;