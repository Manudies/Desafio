import {Router} from "express";

import moduloApiController from "../controllers/modulos/moduloApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",moduloApiController.getAll);
router.get("/byproperty",moduloApiController.getByProperty);
router.get("/:id",moduloApiController.getById);
router.post("/",isAdmin,moduloApiController.create);
router.put("/:id",isAdmin,moduloApiController.update);
router.delete("/:id",isAdmin,moduloApiController.remove);


export default router;