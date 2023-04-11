const mongoose =require("mongoose")
const{createCopouns}=require("../Controllers/copouns")
const copounsSchema=mongoose.Schema(
    {
        name:{
            
            type:String,
        minLength:4,

        },amount:{
            type:Number
        },ceria:{
            type:Number
        },descrep:{
            type:String,

        }

    },{ timestamps: true }
)
var copounsModel= mongoose.model("copouns",copounsSchema)
module.exports=copounsModel