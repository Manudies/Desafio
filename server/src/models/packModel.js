import mongoose from "mongoose";

const packSchema = new mongoose.Schema({
    packName: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    include: [{
        type:String,
    }],
    deliverables: [{type:String,}],
})

const packModel = mongoose.model("packs",packSchema);

export default packModel;