import mongoose from "mongoose";

const packSchema = new mongoose.Schema({
    packName: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    include: {
        type:String,
    },
    deliverables: String,
    seniorFriendly: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const packModel = mongoose.model("packs",packSchema);

export default packModel;