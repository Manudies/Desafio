
import moduloModel from "../../models/moduloModel.js";

const getAll = async()=> {
    try {
        const modulos = await moduloModel.find();
        return modulos;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const modulo = await moduloModel.findById(id);
        return modulo;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const update = async (id, data) => {
    try {
        await moduloModel.findByIdAndUpdate(id, data);

        const modulo = await moduloModel.findById(id);
        return modulo;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const getByProperty = async (property, value) => {
    try { 
        console.log("property",property)
        console.log("value",value)
        const modulo = await moduloModel.find({ [property]: value })
        return modulo;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
   try {
       const modulo = await moduloModel.create(data);
       return modulo;
   } catch (error) {
       console.error(error); 
        return null;  
    }
}

const remove = async(id) =>{
    try {
        const modulos = await moduloModel.findByIdAndDelete(id);
        return modulos;
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