import { Request, Response, Router } from "express";
import { RecipeController } from "../controllers";
import { RecipeService } from "../services/recipe.service";
import { checkJWT } from "../middleware/jwt";
import seed from "../seeders";

const seedRoutes = Router();


seedRoutes.get(
    "",
    async (req: Request, res: Response) => {
        await seed();
        return res.json({
            success: true,
            message: "Seeded successfully"
        });
    }
);

export default seedRoutes;
