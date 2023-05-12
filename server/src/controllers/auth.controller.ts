import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UserRegisterDto } from "../dto/user/userRegister.dto";

export class AuthController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response): Promise<Response>{
    const userRegisterDto = plainToClass(UserRegisterDto, req.body);

    const errors = await validate(userRegisterDto);
    if (errors.length > 0) {
      return res.status(400).json(errors.map((err) => err.constraints));
    }
    try {
        const existingUser = await this.userService.findByEmail(req.body.email);
        if (existingUser) 
            return res.status(400).json({ message: "User already exists" });
        const user = await this.userService.register(req.body);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        
        return res.status(500).json(error);
    }   
  }
  auth(req, res) {
    // auth logic
  }
  login(req, res) {
    // login logic
  }
}
