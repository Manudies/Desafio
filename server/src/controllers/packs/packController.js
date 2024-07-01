
import packModel from "../../models/packModel.js";

const getAll = async()=> {
    try {
        const packs = await packModel.find();
        return packs;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const pack = await packModel.findById(id);
        return pack;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const update = async (id, data) => {
    try {
        await packModel.findByIdAndUpdate(id, data);

        const pack = await packModel.findById(id);
        return pack;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const getByProperty = async (property, value) => {
    try { 
        // console.log("property",property)
        // console.log("value",value)
        const pack = await packModel.find({ [property]: value })
        return pack;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
   try {
       const pack = await packModel.create(data);
       return pack;
   } catch (error) {
       console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const packs = await packModel.findByIdAndDelete(id);
        return packs;
    } catch (error) {
        console.error(error);
        return null;
    }
}



export const functions = {
    getAll,
    getById,
    update,
    getByProperty,
    create,
    remove,
}

export default functions;