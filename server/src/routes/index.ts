import { Router } from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipe.routes";
import categoryRoutes from "./category.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/recipe", recipeRoutes);
rootRoutes.use("/category", categoryRoutes);

export default rootRoutes;
