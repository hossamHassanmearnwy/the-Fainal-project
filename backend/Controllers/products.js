const ProductsModel = require("../Models/products")


function createProduct(product) {
    return ProductsModel.create(product)

}

function updateProductById(id, product) {
    return ProductsModel.updateOne({_id:id}, product)
}

function getAll() {
    //    return ProductsModel.find().populate("userId")
    return ProductsModel.find().populate(["offer", "review", "Categorie"]).limit(limit).skip(skip)

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