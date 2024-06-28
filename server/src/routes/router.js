import {Router} from "express";

import userRouter from "./userRouter.js";
import seniorFriendlyRouter from "./seniorFriendlyRouter.js";
import silverFriendlyRouter from "./silverFriendlyRouter.js";

import authRouter from "./authRouter.js";


import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"Hola API"});
})
// router.use("/users",isAuthenticated,userRouter); Para uso desde el front
router.use("/users",userRouter);
router.use("/seniorFriendly",seniorFriendlyRouter);
router.use("/silverFriendly",silverFriendlyRouter);


router.use("/",authRouter);

export default router;