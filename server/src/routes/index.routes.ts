import { Router } from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipe.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/recipe", recipeRoutes);

export default rootRoutes;
