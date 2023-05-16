import Repository from "../utils/repository";
import { UserModel, User } from "../models/user.model";
import { UserRegisterDto } from "src/dto/user/userRegister.dto";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
  private userRepository: Repository<User> = new Repository(UserModel);

  public async register(data: UserRegisterDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await this.userRepository.create({ ...data, password: passwordHash });
    return {
      user,
      token: this.generateToken(user),
    }
  }
  public async login(body: any) : Promise<{user:User, token:string}> {
    const user = await this.userRepository.findOne({ email: body.email });
    if (!user || !(await bcrypt.compare(body.password, user.password))) 
        return null;

    return {
      user,
      token: this.generateToken(user),
    }
    
  }
  public async auth() {
    // auth logic
  }

  public async findByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  public async findOne(body : Partial<User>) {  
    return this.userRepository.findOne(body);
  }

  private generateToken(user: User) { 
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  }

}
