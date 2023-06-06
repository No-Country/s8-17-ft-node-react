import { Router } from "express";
import { NewsController } from "../controllers/news.controller";
import { NewsService } from "../services/news.service";
import { checkJWT } from "../middleware/jwt";

const newsRoutes = Router();
const newsController = new NewsController(new NewsService());

newsRoutes.get("/", checkJWT, newsController.getAll.bind(newsController));

export default newsRoutes;
