import { Router } from "express";
import authRoutes from "./auth.routes";
import recipeRoutes from "./recipe.routes";
import categoryRoutes from "./category.routes";
import dietRoutes from "./diet.routes";
import seedRoutes from "./seed.routes";
import subscriptionRoutes from "./subscription.routes";
import newsRoutes from "./news.routes";
import eventRoutes from "./event.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/recipe", recipeRoutes);
rootRoutes.use("/category", categoryRoutes);
rootRoutes.use("/diet", dietRoutes);
rootRoutes.use("/seed", seedRoutes);
rootRoutes.use("/subscription", subscriptionRoutes);
rootRoutes.use("/news", newsRoutes);
rootRoutes.use("/calendary", eventRoutes);

export default rootRoutes;
