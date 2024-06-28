import {Router} from "express";

import silverEconomyApiController from "../controllers/trips/silverEconomyApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",silverEconomyApiController.getAll);
router.get("/byproperty",silverEconomyApiController.getByProperty);
router.get("/:id",silverEconomyApiController.getById);
router.post("/",isAdmin,silverEconomyApiController.create);
router.put("/:id",isAdmin,silverEconomyApiController.update);
router.delete("/:id",isAdmin,silverEconomyApiController.remove);


export default router;