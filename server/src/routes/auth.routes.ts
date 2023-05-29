import { Router } from "express";
import { AuthController } from "../controllers";
import { UserService } from "../services/user.service";
import { checkJWT } from "../middleware/jwt";
import { passportConfig } from "../middleware/google.strategy";

const authRoutes = Router();
const authController = new AuthController(new UserService());

authRoutes.post("/register", authController.register.bind(authController));
authRoutes.post("/login", authController.login.bind(authController));
authRoutes.post("/update/user", checkJWT, authController.updateUser.bind(authController));
authRoutes.post("/update/password", checkJWT, authController.updatePassword.bind(authController));
authRoutes.get("/profile", checkJWT, authController.auth.bind(authController));
authRoutes.get("/google", passportConfig.authenticate("google", { scope: ["profile", "email"] }));
authRoutes.get(
  "/google/callback",
  passportConfig.authenticate("google", { failureRedirect: "/login" }),
  authController.googleCallback.bind(authController)
);
authRoutes.get("/facebook", passportConfig.authenticate("facebook", { scope: ["profile", "email" ]}));
authRoutes.get(
  "/facebook/callback",
  passportConfig.authenticate("facebook", { failureRedirect: "/login" }),
  authController.facebookCallback.bind(authController)
);
export default authRoutes;
