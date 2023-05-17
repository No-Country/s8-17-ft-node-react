import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  const authorization = <string>req.headers["authorization"];
  if (!authorization) return res.status(401).json({ message: "Not authorized" });
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtPayload = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
  next();
};
