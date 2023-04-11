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
    // var id = req.params.id
    // var {ItemName,review,offer,Price,Brand,Color,OnSale,PriceonSale}=req.body //add status //{title:[]=[]}
    try {
        //    var updtaedProdutcs=  await updateProductById(id,product)
        // var updtaedProdutcs=  await updateProductById(id,ItemName,review,offer,Price,Brand,Color,OnSale,PriceonSale)
        var updatedProdutcs = await ProductsModel.findByIdAndUpdate(
            req.params.id, {
            review: req.body.review,
            offer: req.body.offer,
            Categorie: req.body.Categorie,
            ItemName: req.body.ItemName,
            Price: req.body.Price,
            Brand: req.body.Brand,
            Color: req.body.Color,
            OnSale: req.body.OnSale,
            PriceonSale: req.body.PriceonSale,
            Storage: req.body.Storage,
            Details: req.body.Details,
            Description: req.body.Description,
            Images: req.body.Images,
            Capacity: req.body.Capacity,
            Interface: req.body.Interface,
            Connector: req.body.Connector,
            Compatibility: req.body.Compatibility,
            workWith: req.body.workWith,
            laptopCompartment: req.body.laptopCompartment,
            Material: req.body.Material,
            powerSource: req.body.powerSource,
            Series: req.body.Series,
            Weight: req.body.Weight,
            Dimensions: req.body.Dimensions,
            Wattage: req.body.Wattage,
            wutputWattage: req.body.wutputWattage,
            Connector: req.body.Connector,
            Type: req.body.Type,
            CompatibleDevices: req.body.CompatibleDevices,
            SpecialFeature: req.body.SpecialFeature,
            connectivityTechnology: req.body.connectivityTechnology,
            compatibleDevices: req.body.compatibleDevices,
            compatiblePhoneModels: req.body.compatiblePhoneModels,
            specialFeature: req.body.specialFeature,
            inputVoltage: req.body.inputVoltage,
            Amperage: req.body.Amperage,
            totalUspPorts: req.body.totalUspPorts,
            mountingType: req.body.mountingType,
            itemHardness: req.body.itemHardness,
            productDimensions: req.body.productDimensions,
            finishType: req.body.finishType,
            unitCount: req.body.unitCount,
            screenSize: req.body.screenSize,
            itemWeight: req.body.itemWeight,
            weightLimit: req.body.weightLimit,
            maximumHeight: req.body.maximumHeight,
            tripodHeadType: req.body.tripodHeadType,
            foldedSize: req.body.foldedSize,
            compatiblePhoneModels: req.body.compatiblePhoneModels,
            brandMaterialType: req.body.brandMaterialType,
            memoryRam: req.body.memoryRam,
            internalStorage: req.body.internalStorage,
            Network: req.body.Network,
            Processor: req.body.Processor,
            Battery: req.body.Battery,
            rearCamera: req.body.rearCamera,
            numberOfBatteries: req.body.numberOfBatteries,
            batteryAverageLifeStandby: req.body.batteryAverageLifeStandby,
            Dimensions: req.body.Dimensions,
            areBatteriesIncluded: req.body.areBatteriesIncluded,
            areBatteriesRequired: req.body.areBatteriesRequired,
            plugFormat: req.body.plugFormat,
            inputVoltage: req.body.inputVoltage,
            outputVoltage: req.body.outputVoltage,
            totalPowerOutlets: req.body.totalPowerOutlets,
            includedComponents: req.body.includedComponents
        }
        )
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
    // todo.userId =req.userId
    try {
        var savedProduct = await createProduct(product)
        res.status(200).json(savedProduct)
    } catch (err) {
        res.json({ message: err.message })
    }


})

module.exports = router