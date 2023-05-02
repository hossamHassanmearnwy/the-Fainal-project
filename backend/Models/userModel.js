    const mongoose=require("mongoose")
    const validator=require("validator")
    const bcrypt = require("bcrypt")


    const userSchema=mongoose.Schema({
        firstName:{
            type: String,
            required: true,
            minLength: 3,
            maxLength: 20,
            
        },
        required: [true, 'User Email required'],
    },
    password:{
        type:String,
        required:true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phoneNumber:{
        type:String,
        length:11
    },
    isDeleted:{
        type:Boolean,
        default: false,
        Date:{
            type:Date,
            default:Date.now
        }    
    },
    Gender:{
        type:String,
        enum:['Male','Female'],
    }

            default:Date.now
        ,
        Gender:{
            type:String,
            required: false,

            // enum:['Male','Female'],
        }

        ,{timestamps:true}
    )


    userSchema.pre('save',function(next){
        const salt = bcrypt.genSaltSync(10);
        const  hashedPassword = bcrypt.hashSync(this.password,salt)
        this.password = hashedPassword
        console.log(this)
    next();
    })

    var userModel =  mongoose.models.User || mongoose.model("User",userSchema)

    module.exports=userModel    


