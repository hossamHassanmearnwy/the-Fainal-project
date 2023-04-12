const mongoose = require("mongoose")
const ProdutsSchema = mongoose.Schema({


    review: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Review" //from controller
    },
    offer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Offers"
    },
    Categorie: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    },

    ItemName: {
        type: String,
        // required:true
    },
    Price: {
        type: Number,
        // required:true
    },
    Brand: {
        type: String,
        // required:true
    },
    Color: {
        type: String
    },
    OnSale: {
        type: Boolean
    },
    PriceonSale: {
        type: Number
    }
    ,
    Storage: {
        type: String
    }
    , Details: {
        type: String
    },
    Description: {
        type: String
    },
    Images: [{
        type: String
    }],
    // Images : { type : Array , "default" : [] }
    Capacity: {
        type: String
    },
    Interface: {
        type: String
    },
    Connector: {
        type: String
    },
    Compatibility: {
        type: String
    },
    workWith: {
        type: String
    },
    laptopCompartment: {
        type: String
    },
    Material: {
        type: String
    },
    powerSource: {
        type: String
    },
    Series: {
        type: String
    },
    Weight: {
        type: String
    },
    Dimensions: {
        type: String
    },
    Wattage: {
        type: String
    },
    wutputWattage: {
        type: String
    },
    Connector: {
        type: String
    },
    Type: {
        type: String
    },
    CompatibleDevices: {
        type: String
    },
    SpecialFeature: {
        type: String
    },
    connectivityTechnology: {
        type: String
    },
    compatibleDevices: {
        type: String
    },
    compatiblePhoneModels: {
        type: String
    },
    specialFeature: {
        type: String
    },
    inputVoltage: {
        type: String
    },
    Amperage: {
        type: String
    },
    totalUspPorts: {
        type: String
    },
    mountingType: {
        type: String
    },
    itemHardness: {
        type: String
    },
    productDimensions: {
        type: String
    },
    finishType: {
        type: String
    },
    unitCount: {
        type: String
    },
    screenSize: {
        type: String
    },
    itemWeight: {
        type: String
    },
    weightLimit: {
        type: String
    },
    maximumHeight: {
        type: String
    },
    tripodHeadType: {
        type: String
    },
    foldedSize: {
        type: String
    },
    compatiblePhoneModels: {
        type: String
    },
    brandMaterialType: {
        type: String
    },
    memoryRam: {
        type: String
    },
    internalStorage: {
        type: String
    },
    Network: {
        type: String
    },
    Processor: {
        type: String
    },
    Battery: {
        type: String
    },
    rearCamera: {
        type: String
    },
    numberOfBatteries: {
        type: String
    },
    batteryAverageLifeStandby: {
        type: String
    },
    Dimensions: {
        type: String
    },
    areBatteriesIncluded: {
        type: String
    },
    areBatteriesRequired: {
        type: String
    },
    plugFormat: {
        type: String
    },
    inputVoltage: {
        type: String
    },
    outputVoltage: {
        type: String
    },
    totalPowerOutlets: {
        type: String
    },
    includedComponents: {
        type: String
    }



}, { timestamps: true }) //timestamps add createdAt updatedAt

const ProdutsModel = mongoose.model("Products", ProdutsSchema) //create collection

module.exports = ProdutsModel