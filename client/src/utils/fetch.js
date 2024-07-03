import { getToken } from "./local";

const API_URL = import.meta.env.VITE_BACKEND_URL

const fetchData = async(route,method,inputData=null)=>{
    console.log("url",API_URL,route)
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    return result;
}

const fetchUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}

const getPacks = async()=>{
    const result = await fetchData("/packs","get");
    return result;
}
const createPack = async(packData)=>{
    const result = await fetchData("/packs","post",packData);
    return result;
}
const remove = async(packId)=>{
    const result = await fetchData("/packs/"+packId,"delete");
    return result;
}
const update = async(packId,packData)=>{
    const result = await fetchData("/packs/"+packId,"put",packData);
    return result;
}
const getByProperty = async(packName)=>{
    const result = await fetchData(`/packs/byproperty?property=packName&value=${packName}`,"get");
    return result;
}

const getUsers = async()=>{
    const result = await fetchData("/users","get");
    return result;
}

const createUser = async(userData)=>{
    const result = await fetchData("/users","post",userData);
    return result;
}

const removeUser = async(userId)=>{
    const result = await fetchData("/users/"+userId,"delete");
    return result;
}
const updateUser = async(userId,userData)=>{
    // console.log("estmps asfsaf")
    const result = await fetchData("/users/"+userId,"put",userData);
    return result;
}
 const addPack = async(userId, packId)=>{
    const result = await fetchData("/users/"+userId+"/packs","post",{packId});
    return result;
}

const removePack = async(userId, packId)=>{
    const result = await fetchData("/users/"+userId+"/packs/"+packId,"delete");
    return result;
}
 
const sendMail = async (data) => {
    const result = await fetchData ("/send-email", "post", data);
    return result;
};


export {
    register,
    login,
    fetchUserData,
    getPacks,
    createPack,
    remove,
    update,
    getByProperty,
    getUsers,
    createUser,
    removeUser,
    updateUser,
    addPack,
    removePack,
    sendMail
}