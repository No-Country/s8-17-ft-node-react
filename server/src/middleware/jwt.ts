import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers['auth'];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, 's8-17-ft-node-react');
        res.locals.jwtPayload = jwtPayload; 
    } catch {
        res.status(401).json({ message: 'Not Authorized' });
    }

    const {_id, name} = jwtPayload;
    const newToken = jwt.sign({ _id, name }, 's8-17-ft-node-react', { expiresIn: '1h' });
    res.setHeader('token', newToken);
    next();
}