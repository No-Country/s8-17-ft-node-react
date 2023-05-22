import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);
  private userRepository: Repository<User> = new Repository(UserModel);

  public async save(id: Partial<User>, recipe: any): Promise<void> {
    const user: User = await this.userRepository.findOne(id);
    if (!user) throw new Error("User not found.");

    // data.recipe.createdBy = user;
    await this.userRepository.update(id, { favRecipes: recipe }, true);
    await this.recipeRepository.create(recipe);
  }

  public async getByUserId(id: string): Promise<Partial<User>> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    const userRecipes: any = user.favRecipes;
    return userRecipes;
  }
}
