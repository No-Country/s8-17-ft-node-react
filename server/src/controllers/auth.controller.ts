import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UserRegisterDto } from "../dto/user/userRegister.dto";
import jwt from "jsonwebtoken";

export class AuthController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response): Promise<Response>{
    const userRegisterDto = plainToClass(UserRegisterDto, req.body);

    const errors = await validate(userRegisterDto);
    if (errors.length > 0) {
      return res.status(400).json(errors.map((err) => err.constraints));
    }
    try {
        const user = await this.userService.findByEmail(req.body.email);
        if (user)
            return res.status(400).json({ message: "User already exists" });
        const newUser = await this.userService.register(req.body);
        return res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        
        return res.status(500).json(error);
    }   
  }
  auth(req, res) {
    // auth logic
  }
  async login(req: Request, res: Response): Promise<Response>{
    if (!(req.body.email && req.body.password)) {
      return res.status(400).json({ message: "Username and Password are required!" });
    }
    try {
      const user = await this.userService.findByEmail(req.body.email);
      if (user.password !== req.body.password) {
        return res.status(400).json({ message: "Username or Password incorrect!" });
      }
      const token = jwt.sign({ _id: user._id, name: user.name }, 's8-17-ft-node-react', { expiresIn: '1h' });
      res.json( {message: 'OK', token: token} );
    } catch {
      return res.status(400).json({ message: "Username or Password incorrect!" });
    }
  }
}
