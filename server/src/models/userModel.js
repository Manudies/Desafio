import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role : {
        type:String,
        enum : ["user","admin"],
        default: "user"
    },
    pack:
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "packs",
            default: []
        }
    ,
    modulo:
        {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "modulo",
            default: []

        }
    
})

const userModel = mongoose.model("users",userSchema);

export default userModel;