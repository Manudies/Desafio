import {Router} from "express";

import packApiController from "../controllers/packs/packApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",packApiController.getAll);
router.get("/byproperty",packApiController.getByProperty);
router.get("/:id",packApiController.getById);
router.post("/",isAdmin,packApiController.create);
router.put("/:id",isAdmin,packApiController.update);
router.delete("/:id",isAdmin,packApiController.remove);


export default router;