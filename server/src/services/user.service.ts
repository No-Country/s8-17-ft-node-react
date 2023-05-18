import Repository from "../utils/repository";
import UserModel, { User } from "../models/user.model";
import { UserRegisterDto } from "src/dto/user/userRegister.dto";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { GoogleAuthDto } from "src/dto/user/googleAuth.dto";

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

    if (!user || !(await bcrypt.compare(body.password, user.password))) return null;
    delete user.password;

    return {
      user,
      token: this.generateToken(user)
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

  public async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });
    delete user.password;
    return user;
  }

  public async findOne(body: Partial<User>) {
    const user = await this.userRepository.findOne(body);
    delete user.password;
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
