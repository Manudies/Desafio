import moduloController from "./moduloController.js";

const getAll= async(req,res)=>{
    const modulos = await moduloController.getAll();
    res.json({data:modulos});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const modulo = await moduloController.getById(id);
    res.json({data:modulo});
}
const update = async(req,res)=>{
    const id =req.params.id;
    const modulo = await moduloController.update(id,req.body);
    res.json({data:modulo})
}
const getByProperty = async(req,res)=>{
    const {property,value}=req.query;
    const modulos = await moduloController.getByProperty(property,value);
    res.json({data:modulos});
}

const create= async(req,res)=>{
    const modulo = await moduloController.create(req.body);
    res.json({data:modulo});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const modulo = await moduloController.remove(id);
    res.json({data:modulo});
} 

export default {
    getAll,
    getById,
    update,
    create,
    getByProperty,
    remove
}

