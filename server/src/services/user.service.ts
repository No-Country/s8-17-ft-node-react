import Repository from "../utils/repository";
import UserModel, { User } from "../models/user.model";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRegisterDto } from "../dto/user/userRegister.dto";
import { GoogleAuthDto } from "../dto/user/googleAuth.dto";
import { error } from "console";

export class UserService {
  private userRepository: Repository<User> = new Repository(UserModel);

  public async register(data: UserRegisterDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await this.userRepository.create({ ...data, password: passwordHash });
    delete user.password;

    return {
      user,
      token: this.generateToken(user)
    };
  }

  public async login(body: any): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findOne({ email: body.email });
    if (!user) throw new Error("Invalid email.");
    if (!(await bcrypt.compare(body.password, user.password))) throw new Error("Invalid password.");
    delete user.password;

    return {
      user,
      token: this.generateToken(user)
    };
  }

  public async update(user: Partial<User>, body: any) {
    const existUser = await this.userRepository.findById(user.id);
    if (!existUser) throw new Error("User not exists!");
    const updatedUser = await this.userRepository.update(user, { ...body, password: body.password? await bcrypt.hash(body.password, 10) : existUser.password });

    return {
      user: updatedUser
    };
  }

  public async loginGoogle(user: GoogleAuthDto): Promise<{ user: User; token: string }> {
    let userDB = await this.userRepository.findOne({ email: user.email });
    if (!userDB) {
      userDB = await this.userRepository.create({
        email: user.email,
        name: user.name
      });
    }
    delete userDB.password;

    return {
      user: userDB,
      token: this.generateToken(userDB)
    };
  }

  public async loginFacebook(user: GoogleAuthDto): Promise<{ user: User; token: string }> {
    let userDB = await this.userRepository.findOne({ email: user.email });
    if (!userDB) {
      userDB = await this.userRepository.create({
        email: user.email,
        name: user.name
      });
    }
    delete userDB.password;

    return {
      user: userDB,
      token: this.generateToken(userDB)
    };
  }

  public async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });
    user ? delete user.password : null;

    return user;
  }

  public async findOne(body: Partial<User>) {
    const user = await this.userRepository.findOne(body);
    user ? delete user.password : null;

    return user;
  }

  public async findById(user: Partial<User>) {
    const existUser = await this.userRepository.findById(user.id);
    existUser ? delete user.password : null;

    return user;
  }

  private generateToken(user: User) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  }
}
