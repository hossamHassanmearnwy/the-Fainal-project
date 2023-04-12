const ProductsModel = require("../Models/products")


function createProduct(product) {
    return ProductsModel.create(product)

}
var bodyArr = { ItemName: "", review: "", offer: "", Price: "", Brand: "", Color: "", OnSale: "", PriceonSale: "" }
function updateProductById(id, product) {
    // return todoModel.updateOne({_id:id},{title:title},{new:true})
    return ProductsModel.findByIdAndUpdate(
        { _id: id },
        { ItemName: bodyArr.ItemName },
        { review: bodyArr.review },
        { offer: bodyArr.offer },
        { Price: bodyArr.Price },
        { Brand: bodyArr.Brand },
        { Color: bodyArr.Color })
    // {OnSale:product.OnSale},
    // {PriceonSale:product.PriceonSale},
    //     // {Storage:product.Storage},
    //     // {Details:product.Details},
    //     // {Description:product.Description},
    //     // {Images:product.Images},
    //     // {Capacity:product.Capacity},
    //     // {Interface:product.Interface}
    //     // ,
    //     // {Connector:product.Connector},
    //     // {Compatibility:product.Compatibility},
    //     // {workWith:product.workWith},
    //     // {laptopCompartment:product.laptopCompartment},
    //     // {Material:product.Material},
    //     // {powerSource:product.powerSource},
    //     // {Series:product.Series},
    //     // {Weight:product.Weight},
    //     // {Dimensions:product.Dimensions},
    //     // {Wattage:product.Wattage},
    //     // {wutputWattage:product.wutputWattage},
    //     // {Connector:product.Connector},
    //     // {Type:product.Type},
    //     // {CompatibleDevices:product.CompatibleDevices},
    //     // {SpecialFeature:product.SpecialFeature},
    //     // {connectivityTechnology:product.connectivityTechnology},
    //     // {compatibleDevices:product.compatibleDevices},
    //     // {compatiblePhoneModels:product.compatiblePhoneModels},
    //     // {specialFeature:product.specialFeature},
    //     // {inputVoltage:product.inputVoltage},
    //     // {Amperage:product.Amperage},
    //     // {totalUspPorts:product.totalUspPorts},
    //     // {mountingType:product.mountingType},
    //     // {itemHardness:product.itemHardness},
    //     // {productDimensions:product.productDimensions},
    //     // {finishType:product.finishType},
    //     // {unitCount:product.unitCount},
    //     // {screenSize:product.screenSize},
    //     // {itemWeight:product.itemWeight},
    //     // {weightLimit:product.weightLimit},
    //     // {maximumHeight:product.maximumHeight},
    //     // {tripodHeadType:product.tripodHeadType},
    //     // {foldedSize:product.foldedSize},
    //     // {compatiblePhoneModels:product.compatiblePhoneModels},
    //     // {brandMaterialType:product.brandMaterialType},
    //     // {memoryRam:product.memoryRam},
    //     // {internalStorage:product.internalStorage},
    //     // {Network:product.Network},
    //     // {Processor:product.Processor},
    //     // {Battery:product.Battery},
    //     // {rearCamera:product.rearCamera},
    //     // {numberOfBatteries:product.numberOfBatteries},
    //     // {batteryAverageLifeStandby:product.batteryAverageLifeStandby},
    //     // {Dimensions:product.Dimensions},
    //     // {areBatteriesIncluded:product.areBatteriesIncluded},
    //     // {areBatteriesRequired:product.areBatteriesRequired},
    //     // {plugFormat:product.plugFormat},
    //     // {inputVoltage:product.inputVoltage},
    //     // {outputVoltage:product.outputVoltage},
    //     // {totalPowerOutlets:product.totalPowerOutlets},
    //     // {includedComponents:product.includedComponents},
    // )

}

function getAll() {
    //    return ProductsModel.find().populate("userId")
    return ProductsModel.find().populate(["offer", "review", "Categorie"])

}

//get all limit 
// function getAll(limit,skip){
//        return ProductsModel.find().limit(limit).skip(skip)
//     }


function gettAllById(id) {
    return ProductsModel.findById(id).populate(["offer", "review", "Categorie"])

}
function gettAllByCat(id) {

    return ProductsModel.find({ Categorie: { _id: id } })

}

function gettAllByOffer(id) {

    return ProductsModel.find({ offer: { _id: id } })

}
function gettAllByReview(id) {

    return ProductsModel.find({ review: { _id: id } })

}

function deleteProductById(id) {
    return ProductsModel.deleteOne({ _id: id })
}
module.exports = { createProduct, updateProductById, getAll, gettAllById, deleteProductById, gettAllByCat, gettAllByOffer, gettAllByReview }