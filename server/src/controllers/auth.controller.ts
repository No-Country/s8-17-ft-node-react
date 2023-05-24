import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { UserRegisterDto } from "../dto/user/userRegister.dto";
import { UserLoginDto } from "../dto/user/userLogin.dto";
import { GoogleAuthDto } from "../dto/user/googleAuth.dto";
import dotenv from "dotenv";
import { User } from "../models/user.model";
dotenv.config();

export class AuthController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response): Promise<Response> {
    const userRegisterDto = plainToClass(UserRegisterDto, req.body);
    const errors = await validate(userRegisterDto);
    if (errors.length > 0) {
      return res.status(400).json(errors.map(err => err.constraints));
    }
    try {
      const user = await this.userService.findByEmail(req.body.email);
      if (user) return res.status(400).json({ errorMessage: "Email already registered." });

      const newUser = await this.userService.register(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      console.log("register error: ", error);
      return res.status(500).json(error);
    }
  }

  async auth(_req: Request, res: Response): Promise<Response> {
    try {
      const partialUser: Partial<User> = { id: res.locals.jwtPayload.id };
      const user = await this.userService.findOne(partialUser);
      return res.status(200).json(user);
    } catch (error) {
      console.log("auth error: ", error);
      return res.status(500).json(error);
    }
  }

  async login(req: Request, res: Response): Promise<Response> {
    const userLoginDto = plainToClass(UserLoginDto, req.body);
    const errors = await validate(userLoginDto);
    if (errors.length > 0) {
      return res.status(400).json(errors.map(err => err.constraints));
    }
    try {
      const response = await this.userService.login(req.body);
      return res.status(200).json(response);
    } catch (error: any) {
      return error.message === "Invalid email." || "Invalid password."
        ? res.status(400).json({ errorMessage: error.message })
        : res.status(500).json({ errorMessage: error });
    }
  }

  async google(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: "Google auth" });
  }

  async googleCallback(req: Request, res: Response): Promise<Response | void> {
    const userGoogleLogin = plainToClass(GoogleAuthDto, req.user);
    const errors = await validate(userGoogleLogin);
    if (errors.length > 0) {
      return res.status(400).json(errors.map(err => err.constraints));
    }
    try {
      const response = await this.userService.loginGoogle(userGoogleLogin);
      if (!response) return res.status(400).json({ message: "Invalid credentials" });

      return res.redirect(`${process.env.CLIENT_URL}?token=${response.token}`);
    } catch (error) {
      console.log("googleCallback error: ", error);
      return res.status(500).json(error);
    }
  }

  async facebook(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: "Facebook auth" });
  }

  async facebookCallback(req: Request, res: Response): Promise<Response | void> {
    const userFacebookLogin = plainToClass(GoogleAuthDto, req.user);
    const errors = await validate(userFacebookLogin);
    if (errors.length > 0) {
      return res.status(400).json(errors.map(err => err.constraints));
    }
    try {
      const response = await this.userService.loginFacebook(userFacebookLogin);
      if (!response) return res.status(400).json({ message: "Invalid credentials" });

      return res.redirect(`${process.env.CLIENT_URL}?token=${response.token}`);
    } catch (error) {
      console.log("facebookCallback error: ", error);
      return res.status(500).json(error);
    }
  }
}
