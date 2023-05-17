import { Router } from "express";
import { AuthController } from "../controllers";
import { UserService } from "../services/user.service";
import { checkJWT } from "../middleware/jwt";
import { passportConfig } from "../middleware/google.strategy";

const authRoutes = Router();
const authController = new AuthController(new UserService());

authRoutes.post("/register", authController.register.bind(authController));
authRoutes.post("/login", authController.login.bind(authController));
authRoutes.get("/auth", checkJWT, authController.auth.bind(authController));
authRoutes.get("/google", passportConfig.authenticate("google", { scope: ["profile", "email"] }));
authRoutes.get(
  "/google/callback",
  passportConfig.authenticate("google", { failureRedirect: "/login" }),
  authController.googleCallback.bind(authController)
);

export default authRoutes;
