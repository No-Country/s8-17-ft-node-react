import Repository from "../utils/repository";
import { UserModel, User } from "../models/user.model";
import { UserRegisterDto } from "src/dto/user/userRegister.dto";

export class UserService {
  private userRepository: Repository<User> = new Repository(UserModel);

  public async register(data: UserRegisterDto) {
   return this.userRepository.create(data);
  }
  public async login() {
    // login logic
  }
  public async auth() {
    // auth logic
  }

  public async findByEmail(email: string) {
    return this.userRepository.findOne({ email });  
  } 
}
