import { Router } from "express";
import { DietController } from "../controllers/diet.controller";
import { DietService } from "../services/diet.service";
import { checkJWT } from "../middleware/jwt";

const dietRoutes = Router();
const dietController = new DietController(new DietService());

dietRoutes.get("/", checkJWT, dietController.getAll.bind(dietController));

export default dietRoutes;
