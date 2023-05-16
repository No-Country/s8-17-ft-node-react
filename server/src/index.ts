console.clear();
import { DataBase } from "./config";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import rootRoutes from "./routes/index.routes";

const bootstrap = async () => {
  dotenv.config();
  await DataBase.initialize();

  const app = express();

  app.use(bodyParser.json());
  app.use(
    cors({
      origin: ["http://localhost:3000", process.env.CLIENT_URL],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
        "Origin",
        "Access-Control-Allow-Headers",
        "Access-Control-Request-Headers"
      ]
    })
  );
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/api", rootRoutes);

  app.listen(3001 || process.env.PORT, () => {
    console.log("Server started on port 3001");
  });
};

bootstrap();
