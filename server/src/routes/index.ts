import { Router } from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipe.routes";
import categoryRoutes from "./category.routes";
import dietRoutes from "./diet.routes";
import seedRoutes from "./seed.routes";
import subscriptionRoutes from "./subscription.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/recipe", recipeRoutes);
rootRoutes.use("/category", categoryRoutes);
rootRoutes.use("/diet", dietRoutes);
rootRoutes.use("/seed", seedRoutes);
rootRoutes.use("/subscription", subscriptionRoutes);

export default rootRoutes;
