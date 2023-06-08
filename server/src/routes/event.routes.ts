import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { RecipeService } from "../services/recipe.service";
import { EventService } from "../services/event.service";
import { checkJWT } from "../middleware/jwt";
import { UserService } from "../services/user.service";

const eventRoutes = Router();
const eventController = new EventController(new EventService(), new UserService(), new RecipeService());

eventRoutes.post("/add-recipe/:recipeId", checkJWT, eventController.addRecipe.bind(eventController));
eventRoutes.delete("/delete-recipe", checkJWT, eventController.deleteRecipe.bind(eventController));

export default eventRoutes;
