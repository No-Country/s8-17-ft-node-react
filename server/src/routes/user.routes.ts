import { Router } from "express";
import { checkJWT } from "../middleware/jwt";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

const userRoutes = Router();
const userController = new UserController(new UserService());

userRoutes.post("/subscribe", checkJWT, userController.subscribe.bind(userController));

export default userRoutes;
