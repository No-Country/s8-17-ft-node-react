import { Request, Response, Router } from "express";
import seed from "../seeders";

const seedRoutes = Router();

seedRoutes.get("", async (_req: Request, res: Response) => {
  await seed();
  return res.status(200).json({
    success: true,
    message: "Seeded successfully"
  });
});

export default seedRoutes;
