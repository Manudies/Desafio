import mongoose from "mongoose";

const moduloSchema = new mongoose.Schema({
    phaseName: {
        type:String,
        required:true
    },
    description: String,
    objetive: String,
    duration: Number,
})

const moduloModel = mongoose.model("modulos",moduloSchema);

export default moduloModel;