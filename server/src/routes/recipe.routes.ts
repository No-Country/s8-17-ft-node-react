import { Router } from "express";
import { RecipeController } from "../controllers";
import { RecipeService } from "../services/recipe.service";
import { checkJWT } from "../middleware/jwt";
import { UserService } from "../services/user.service";

const recipeRoutes = Router();
const recipeController = new RecipeController(
    new RecipeService(),
    new UserService(),
    );

recipeRoutes.post("/generate", checkJWT, recipeController.generate.bind(recipeController));
recipeRoutes.get("/add-favorite/:id", checkJWT, recipeController.addFavorite.bind(recipeController));
recipeRoutes.get("/delete-favorite/:id", checkJWT, recipeController.deleteFavorite.bind(recipeController));
recipeRoutes.get("/", recipeController.getAll.bind(recipeController));
recipeRoutes.get("/favorite", checkJWT, recipeController.getFavoriteByUser.bind(recipeController));
recipeRoutes.get("/createdBy", checkJWT, recipeController.getCreatedBy.bind(recipeController));
recipeRoutes.get("/id/:id", recipeController.getById.bind(recipeController));

export default recipeRoutes;
