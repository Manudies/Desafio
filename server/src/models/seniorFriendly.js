import mongoose from "mongoose";

const seniorFriendlySchema = new mongoose.Schema({
    packName: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    include: String,
    deliverables: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const seniorFriendlyModel = mongoose.model("seniorFriendly",seniorFriendlySchema);

export default seniorFriendlyModel;