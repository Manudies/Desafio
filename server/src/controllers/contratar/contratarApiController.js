import favoriteController from "./contratarController.js";

const getAll = async(req,res)=>{
    const packId = req.query.packId;
    const favorites = await favoriteController.getAll(packId);
    res.json({data:favorites});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const favorite = await favoriteController.getById(id);
    res.json({data:favorite});
}


const create = async(req,res)=>{
    const favorite = await favoriteController.create(req.body);
    res.json({data:favorite})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const favorite = await favoriteController.update(id,req.body);
    res.json({data:favorite})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const favorite = await favoriteController.remove(id);
    res.json({data:favorite})
}

export default{
    getAll,
    getById,
    create,
    update,
    remove,
}

