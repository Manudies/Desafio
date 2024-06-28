import {Router} from "express";

import seniorFriendlyApiController from "../controllers/trips/seniorFriendlyApiController.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";



const router  = Router();

router.get("/",seniorFriendlyApiController.getAll);
router.get("/byproperty",seniorFriendlyApiController.getByProperty);
router.get("/:id",seniorFriendlyApiController.getById);
router.post("/",isAdmin,seniorFriendlyApiController.create);
router.put("/:id",isAdmin,seniorFriendlyApiController.update);
router.delete("/:id",isAdmin,seniorFriendlyApiController.remove);


export default router;