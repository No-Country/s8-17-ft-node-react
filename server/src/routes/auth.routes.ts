import { Router } from "express";
import { AuthController } from "../controllers";
import { UserService } from "../services/user.service";

const authRoutes = Router();
const authController = new AuthController(
    new UserService()
);

authRoutes.post("/register",authController.register.bind(authController));
authRoutes.post("/login", authController.login.bind(authController));
authRoutes.get("/auth", authController.auth.bind(authController));

export default authRoutes;