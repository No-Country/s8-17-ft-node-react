import { Router } from "express";
import authRoutes from "./auth.routes";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoutes);

export default rootRoutes;
