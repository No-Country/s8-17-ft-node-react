import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UserRegisterDto } from "../dto/user/userRegister.dto";
import { UserLoginDto } from "../dto/user/userLogin.dto";

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
  async auth(req: Request, res: Response): Promise<Response>{
    try {
    const user = await this.userService.findOne(res.locals.jwtPayload.id);
    return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
  }
  async login(req: Request, res: Response): Promise<Response>{
    const userLoginDto = plainToClass(UserLoginDto, req.body);

    const errors = await validate(userLoginDto);
    if (errors.length > 0) {
      return res.status(400).json(errors.map((err) => err.constraints));
    }
    try {
      const response = await this.userService.login(req.body); 
      return res.status(200).json(response);
  }catch (error) {
      console.log(error);
      return res.status(500).json(error);
  } 
}
}
