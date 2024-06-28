import mongoose from "mongoose";

const silverEconomySchema = new mongoose.Schema({
    phaseName: {
        type:String,
        required:true
    },
    description: String,
    objetive: String,
    duration: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const silverEconomyModel = mongoose.model("silverEconomy",silverEconomySchema);

export default silverEconomyModel;