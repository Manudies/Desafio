import packController from "./packController.js";

const getAll= async(req,res)=>{
    const packs = await packController.getAll();
    res.json({data:packs});
} 

const getById = async (req,res) =>{
    const id = req.params.id
    const pack = await packController.getById(id);
    res.json({data:pack});
}
const update = async(req,res)=>{
    const id =req.params.id;
    const pack = await packController.update(id,req.body);
    res.json({data:pack})
}
const getByProperty = async(req,res)=>{
    const {property,value}=req.query;
    const packs = await packController.getByProperty(property,value);
    res.json({data:packs});
}

const create= async(req,res)=>{
    const pack = await packController.create(req.body);
    res.json({data:pack});
}

const remove= async(req,res)=>{
    const id= req.params.id
    const pack = await packController.remove(id);
    res.json({data:pack});
} 

export default {
    getAll,
    getById,
    update,
    create,
    getByProperty,
    remove
}

