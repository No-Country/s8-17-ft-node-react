import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";
import { Ref } from "@typegoose/typegoose";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);
  private userRepository: Repository<User> = new Repository(UserModel);

  public async save(id: string, recipe: Recipe[]): Promise<void> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    await this.userRepository.update({ id }, { favRecipes: recipe }, true);
    await this.recipeRepository.create(recipe);
  }

  public async getByUserId(id: string): Promise<Recipe[]> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    const userRecipes: Recipe[] = user.favRecipes;
    return userRecipes;
  }
}
