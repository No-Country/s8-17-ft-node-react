import Repository from "../utils/repository";
import UserModel, { User } from "../models/user.model";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRegisterDto } from "../dto/user/userRegister.dto";
import { GoogleAuthDto } from "../dto/user/googleAuth.dto";
import { UserUpdateDto } from "../dto/user/userUpdate.dto";
import { Event } from "src/models/event.model";
import { Recipe } from "../models/recipe.model";
import { UserRoles } from "../utils/types";

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

  public async updateUser(user: UserUpdateDto): Promise<{ user: User }> {
    const existUser: User = await this.userRepository.findById(user.id);
    if (!existUser) throw new Error("User not found!");

    let hashedPassword: string;
    if (user.password && user.newPassword) {
      if (!(await bcrypt.compare(user.password, existUser.password)))
        throw new Error("Invalid password.");

      hashedPassword = await bcrypt.hash(user.newPassword, 10);
    }

    const updatedUser: User = await this.userRepository.update(
      { id: user.id },
      { ...user, password: hashedPassword || existUser.password }
    );

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

  public async findById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ id: id });
    user ? delete user.password : null;

    return user;
  }

  public async addFavoriteRecipe(user: User, recipe: Recipe): Promise<User> {
    return this.userRepository.update(
      {
        id: user.id
      },
      { $addToSet: { favRecipes: recipe } }
    );
  }

  public async deleteFavoriteRecipe(user: User, recipe: Recipe): Promise<User> {
    return this.userRepository.update(
      {
        id: user.id
      },
      { $pullAll: { favRecipes: [recipe] } }
    );
  }

  public async updateSubscriptionStatus(userId: string, subscription: any): Promise<void> {
    await this.userRepository.update(
      { id: userId },
      {
        subscription
      }
    );
  }

  public async updateRole(userId: string, role: UserRoles): Promise<void> {
    await this.userRepository.update(
      {
        id: userId
      },
      {
        role: role
      }
    );
  }

  private generateToken(user: User) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  }
}
