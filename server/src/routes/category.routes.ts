import { Router } from "express";
import { CategoryController } from "../controllers";
import { CategoryService } from "../services/category.service";
import { checkJWT } from "../middleware/jwt";

const categoryRoutes = Router();
const categoryController = new CategoryController(new CategoryService());

categoryRoutes.get("/", checkJWT, categoryController.getAll.bind(categoryController));

export default categoryRoutes;
