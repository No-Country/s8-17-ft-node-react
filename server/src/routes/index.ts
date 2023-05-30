import { Router } from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipe.routes";
import categoryRoutes from "./category.routes";
import dietRoutes from "./diet.routes";
import seedRoutes from "./seed.routes";
import userRoutes from "./user.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/recipe", recipeRoutes);
rootRoutes.use("/category", categoryRoutes);
rootRoutes.use("/diet", dietRoutes);
rootRoutes.use("/seed", seedRoutes);
rootRoutes.use("/user", userRoutes);

export default rootRoutes;
