import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    user:{
            type: mongoose.Schema.ObjectId,
            ref: 'users'
        },

    pack:{
        type: mongoose.Schema.ObjectId,
        ref: 'packs'
    }
});

const favoriteModel = mongoose.model("favorites",favoriteSchema);

export default favoriteModel;