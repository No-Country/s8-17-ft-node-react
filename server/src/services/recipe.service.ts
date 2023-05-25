import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";
import { ObjectId } from "mongoose";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);
  private userRepository: Repository<User> = new Repository(UserModel);

  public async save(id: string, recipe: Partial<Recipe>): Promise<void> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    await this.userRepository.update({ id }, { $push: { favRecipes: recipe } }, true);
    await this.recipeRepository.create(recipe);
  }

  public async getByUserId(id: string): Promise<Partial<Recipe>[]> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    const userRecipes: Recipe[] = await this.recipeRepository.findAllByRef(user.favRecipes);
    return userRecipes;
  }

  public async getAll(): Promise<Recipe[]> {
    return await this.recipeRepository.findAll();
  }

  public async getById(id: string): Promise<Recipe> {
    return await this.recipeRepository.findById(id);
  }

  public async getCreatedBy(createdBy: string): Promise<Recipe[]> {
    const user: User & { _id: ObjectId } = await this.userRepository.findById(createdBy);
    if (!user) throw new Error("User not found.");
    return await this.recipeRepository.findAll({
      createdBy:user
    });
  }

}
