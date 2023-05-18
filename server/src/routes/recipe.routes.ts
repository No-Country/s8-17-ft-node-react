import { Router } from "express";
import { RecipeController } from "../controllers";
import { RecipeService } from "../services/recipe.service";
import { checkJWT } from "../middleware/jwt";

const recipeRoutes = Router();
const recipeController = new RecipeController(new RecipeService());

recipeRoutes.post("/generate", checkJWT, recipeController.generate.bind(recipeController));

export default recipeRoutes;
