import {Router} from "express";

import contratarControllerApiController from "../controllers/contratar/contratarApiController.js";


const router  = Router();

router.get("/",contratarControllerApiController.getAll);
router.get("/:id",contratarControllerApiController.getById);
router.post("/",contratarControllerApiController.create);
router.put("/:id",contratarControllerApiController.update);
router.delete("/:id",contratarControllerApiController.remove);

export default router;