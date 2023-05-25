import { Router } from "express";
import { RecipeController } from "../controllers";
import { RecipeService } from "../services/recipe.service";
import { checkJWT } from "../middleware/jwt";

const recipeRoutes = Router();
const recipeController = new RecipeController(new RecipeService());

recipeRoutes.post("/generate", checkJWT, recipeController.generate.bind(recipeController));
recipeRoutes.post("/save", checkJWT, recipeController.save.bind(recipeController));
recipeRoutes.get("/", checkJWT, recipeController.getByUserId.bind(recipeController));

export default recipeRoutes;
