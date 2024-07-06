import {Router} from "express";

import packApiController from "../controllers/packs/packApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",packApiController.getAll);
router.get("/byproperty",packApiController.getByProperty);
router.get("/:id",packApiController.getById);
router.post("/",packApiController.create);
router.put("/:id",packApiController.update);
router.delete("/:id",packApiController.remove);


export default router;