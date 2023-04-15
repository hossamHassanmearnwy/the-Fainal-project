const express = require("express");
var { createProduct, updateProductById, getAll, gettAllById, deleteProductById, gettAllByCat, gettAllByOffer, gettAllByReview } = require("../Controllers/products");
var router = express.Router()
const ProductsModel = require("../Models/products")


//get all
router.get("/", async (req, res, next) => {
    try {
        var Products = await getAll()
        res.status(200).json(Products)
    } catch (err) {
        res.json({ message: err.message })
    }

})
//get all limits
// router.get("/",async (req, res, next) => {
//     var limit = parseInt(req.query.limit) || 10
//     var skip = parseInt(req.query.skip)     || 0
//     try{
//         var Products=  await getAll(limit,skip)
//         res.status(200).json(Products)
//     }catch(err){
//         res.json({message:err.message})
//     }
// })

//get by id
router.get("/:id", async (req, res, next) => {
    var { id } = req.params
    try {
        var Products = await gettAllById(id)
        res.status(200).json(Products)
    } catch (err) {
        res.json({ message: err.message })
    }
})
//prod count
// router.get("/count", async (req, res, next) => {
//     var { id } = req.params
//     try{
//         var Products=  await gettAllById(id)
//         res.status(200).json(Products)
//     }catch(err){
//         res.json({message:err.message})
//     }
// })

//get by cat
router.get("/Categories/:id", async (req, res, next) => {
    var { id } = req.params
    try {
        var Products = await gettAllByCat(id)
        res.status(200).json(Products)
    } catch (err) {
        res.json({ message: err.message })
    }
})

//get prod by offer
router.get("/Offers/:id", async (req, res, next) => {
    var { id } = req.params
    try {
        var Products = await gettAllByOffer(id)
        res.status(200).json(Products)
    } catch (err) {
        res.json({ message: err.message })
    }
})

// get prod by review
router.get("/Reviews/:id", async (req, res, next) => {
    var { id } = req.params
    try {
        var Products = await gettAllByReview(id)
        res.status(200).json(Products)
    } catch (err) {
        res.json({ message: err.message })
    }
})

//update
router.patch("/:id", async (req, res, next) => {
    var id = req.params.id
    var product = req.body;
    try {
        var updatedProdutcs = await updateProductById(id, product)
        res.json(updatedProdutcs)

    } catch (err) {
        res.json({ message: err.message })
    }
})

//delete
router.delete("/:id", async (req, res, next) => {
    var id = req.params.id
    try {
        var deleteProduct = await deleteProductById(id)
        res.status(200).json(deleteProduct)
    } catch (err) {
        res.json({ message: err.message })
    }

})

//add create
router.post("/", async (req, res, next) => {
    var product = req.body
    try {
        var savedProduct = await createProduct(product)
        res.status(200).json(savedProduct)
    } catch (err) {
        res.json({ message: err.message })
    }


})

module.exports = router