import contratarModel from "../../models/contratarModel.js";
import packController from "../packs/packController.js";

const getAll = async (packId) => {
    try {
        const favorites = await contratarModel.find({ pack: packId });
        await Promise.all(favorites.map(async (favorite) => {
            await favorite.populate({
                path: "users",
                select: { username: 1, email: 1, role: 1 }
            });
        }));
        return favorites;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getById = async (id) => {
    try {
        const favorite = await contratarModel.findById(id);
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;

    }
}
const getByProperty = async (property, value) => {
    try {
        const favorite = await contratarModel.find({ [property]: value })
        return favorite;
    } catch (error) {
        return null;
    }
}
const create = async (data) => {
    try {
        const favorite = await contratarModel.create(data);
        if (favorite) {
            await packController.addfavorite(favorite.pack, favorite._id)
        }
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const update = async (id, data) => {
    console.log("datatata", data)
    try {
        await contratarModel.findByIdAndUpdate(id, data);

        const favorite = await contratarModel.findById(id);
        await favorite.populate({
            path: "users",
            select: { username: 1, email: 1, role: 1 }
        });
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async (id) => {
    try {
        const favorite = await contratarModel.findByIdAndDelete(id);
        await packController.removefavorite(favorite.pack, favorite._id);
        return favorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeMany = async (ids) => {
    try {
        const favorites = await contratarModel.deleteMany({ _id: { $in: ids } });
        return favorites;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    removeMany,
}

export default functions;