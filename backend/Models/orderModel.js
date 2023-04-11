const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    products:[{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
        quantity: { type: Number, default: 1 },
    }],
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        // required: true,
    },
    shippingAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ["Pending", "Inprogress", "Done"],
        default:"Pending"
    },
    totalPrice:{
        type:Number,
        required: true
    },
    
    
    cartId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Cart'
    }

    

}, { timestamps: true })



var orderModel = mongoose.model("Orders",orderSchema)

module.exports=orderModel