import { Router } from "express";
import { RecipeController } from "../controllers";
import { RecipeService } from "../services/recipe.service";
import { checkJWT } from "../middleware/jwt";

const recipeRoutes = Router();
const recipeController = new RecipeController(new RecipeService());

recipeRoutes.post("/generate", checkJWT, recipeController.generate.bind(recipeController));
recipeRoutes.post("/save", checkJWT, recipeController.save.bind(recipeController));
recipeRoutes.get("/", recipeController.getAll.bind(recipeController));
recipeRoutes.get("/favorite", checkJWT, recipeController.getFavoriteByUser.bind(recipeController));
recipeRoutes.get("/create", checkJWT, recipeController.getCreatedBy.bind(recipeController));
recipeRoutes.get("/id/:id", recipeController.getById.bind(recipeController));

export default recipeRoutes;
