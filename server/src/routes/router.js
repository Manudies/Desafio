import {Router} from "express";

import userRouter from "./userRouter.js";
import packRouter from "./packRouter.js";
import moduloRouter from "./modulosRouter.js";

import authRouter from "./authRouter.js";


import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"Hola API"});
})
router.use("/users",isAuthenticated,userRouter); //Para uso desde el front
router.use("/users",userRouter);
router.use("/packs",packRouter);
router.use("/modulos",moduloRouter);


router.use("/",authRouter);

export default router;