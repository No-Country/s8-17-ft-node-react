import Repository from "../utils/repository";
import RecipeModel, { Recipe } from "../models/recipe.model";
import UserModel, { User } from "../models/user.model";
import { Ref } from "@typegoose/typegoose";
import { RecipeIterface } from "src/utils/types";
import { SaveRecipeDto } from "src/dto/recipe/save-recipe.dto";

export class RecipeService {
  private recipeRepository: Repository<Recipe> = new Repository(RecipeModel);
  private userRepository: Repository<User> = new Repository(UserModel);

  public async save(id: string, recipe:SaveRecipeDto ): Promise<void> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    // const favRecipes: Recipe[] = user.favRecipes;
    // await this.userRepository.update({ id }, { favRecipes: [
    //   ...favRecipes,
    //   ...recipe
    // ] }, true);



    await this.userRepository.update(user.id, recipe, false);
    await this.recipeRepository.create(recipe);
  }

  public async getByUserId(id: string): Promise<Recipe[]> {
    const user: User = await this.userRepository.findOne({ id });
    if (!user) throw new Error("User not found.");

    const userRecipes: Recipe[] = user.favRecipes;
    return userRecipes;
  }
}
